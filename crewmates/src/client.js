import { createClient } from '@supabase/supabase-js'

const URL = 'https://wpamruwumqxiphylmxcn.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwYW1ydXd1bXF4aXBoeWxteGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTE0MzAsImV4cCI6MjA2ODg4NzQzMH0.-SxIbmkMTLlHss-b911NTYxsyqgRkTANQ02IScZbOvM'

export const supabase = createClient(URL, API_KEY)