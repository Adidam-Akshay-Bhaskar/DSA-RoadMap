import { createClient } from '@supabase/supabase-js';

// --- TAB ISOLATION LOGIC ---
// We create a unique "Identity" for this specific tab.
// This identity stays the same if you REFRESH, 
// but is completely DIFFERENT if you open a New Tab.
let tabId = sessionStorage.getItem('dsa_tab_id');
if (!tabId) {
  tabId = Math.random().toString(36).substring(2, 12);
  sessionStorage.setItem('dsa_tab_id', tabId);
}

const supabaseUrl = 'https://urqtkhzdfcxuvaxkqtiz.supabase.co';
const supabaseKey = 'sb_publishable_yRfY3MAEWD_RYx1l5lnHtw_Y0aZoEwF';

// We use the unique tabId as the storage key.
// This ensures that Tab A can never see Tab B's session.
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: `sb-auth-token-${tabId}`, 
    storage: window.sessionStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  }
});
