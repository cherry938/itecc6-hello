import { createClient } from '@supabase/supabase-js'
const supabaseURL ='itecc6-hello'
const supabaseKey = 'fpoygiyxdilokdknjojw'
export const supabase = createClient(supabaseURL,supabase)