import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_APIKEY;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
