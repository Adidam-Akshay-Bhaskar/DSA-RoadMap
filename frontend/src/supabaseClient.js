import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urqtkhzdfcxuvaxkqtiz.supabase.co';
const supabaseKey = 'sb_publishable_yRfY3MAEWD_RYx1l5lnHtw_Y0aZoEwF';

const customStorage = {
  getItem: (key) => {
    return window.sessionStorage.getItem(key);
  },
  setItem: (key, value) => {
    window.sessionStorage.setItem(key, value);
  },
  removeItem: (key) => {
    window.sessionStorage.removeItem(key);
  }
};

// Forcefully wipe legacy localStorage fallback keys so that old sessions NEVER migrate silently.
// This guarantees strict isolation!
Object.keys(window.localStorage).forEach(key => {
  if (key.startsWith('sb-') && key.endsWith('-auth-token')) {
    window.localStorage.removeItem(key);
  }
});

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: customStorage,
    storageKey: 'dsa-roadmap-auth'
  }
});
