import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urqtkhzdfcxuvaxkqtiz.supabase.co';
const supabaseKey = 'sb_publishable_yRfY3MAEWD_RYx1l5lnHtw_Y0aZoEwF';

// --- STRICT MULTI-TAB ISOLATION & "ALWAYS LOGIN" ENFORCEMENT ---

let navType = "navigate";
if (window.performance) {
  const navEntries = window.performance.getEntriesByType("navigation");
  if (navEntries && navEntries.length > 0) {
    navType = navEntries[0].type;
  } else if (window.performance.navigation) {
    // Fallback for older browsers
    navType = window.performance.navigation.type === 1 ? "reload" : 
              window.performance.navigation.type === 2 ? "back_forward" : "navigate";
  }
}

let tabId = window.sessionStorage.getItem('dsa_tab_id');
const hasAuthHash = window.location.hash.includes("access_token") || 
                    window.location.hash.includes("type=recovery") || 
                    window.location.hash.includes("error_description");

// If this is a new tab entirely, OR a duplicated tab/typed URL ("navigate") AND not returning from an OAuth email link,
// destroy the session completely and force a credential check!
if (!tabId || (navType === "navigate" && !hasAuthHash)) {
  window.sessionStorage.clear(); // Absolutely annihilates duplicated tokens
  tabId = 'tab_' + Math.random().toString(36).substring(2, 15);
  window.sessionStorage.setItem('dsa_tab_id', tabId);
}

// Map custom storage purely to this strict sessionStorage environment
const customStorage = {
  getItem: (key) => window.sessionStorage.getItem(key),
  setItem: (key, value) => window.sessionStorage.setItem(key, value),
  removeItem: (key) => window.sessionStorage.removeItem(key)
};

// Forcefully wipe legacy global tokens out of localStorage to prevent any cross-tab or persistent leaks
Object.keys(window.localStorage).forEach(key => {
  if (key.includes('sb-') && key.includes('-auth-token')) {
    window.localStorage.removeItem(key);
  }
});

// Initialize with a completely unique storage key per tab so BroadcastChannels don't cross-communicate
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: customStorage,
    storageKey: `dsa-auth-${tabId}`
  }
});
