import { createClient } from '@supabase/supabase-js';

// Extremely strict: Wipe any permanent browser memory for this site
// This ensures that login sessions CANNOT be shared between tabs.
localStorage.clear(); 

const supabaseUrl = 'https://urqtkhzdfcxuvaxkqtiz.supabase.co';
const supabaseKey = 'sb_publishable_yRfY3MAEWD_RYx1l5lnHtw_Y0aZoEwF';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: window.sessionStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  }
});
