import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urqtkhzdfcxuvaxkqtiz.supabase.co';
const supabaseKey = 'sb_publishable_yRfY3MAEWD_RYx1l5lnHtw_Y0aZoEwF';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: window.sessionStorage,
    storageKey: 'dsa-roadmap-auth'
  }
});
