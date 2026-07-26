import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://edgcfbklolrerevasyly.supabase.co'
const supabaseKey = 'sb_publishable_E2zBice8CxkH2dhyXVT9rw_zWC1w2gu'

export const supabase = createClient(supabaseUrl, supabaseKey)
