import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fbskikuokfvgfiqwqhfz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZic2tpa3Vva2Z2Z2ZpcXdxaGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTE2NzMsImV4cCI6MjA2NTY2NzY3M30.SOhAxKD3CJPVlji3z8ICIs0SW5X5gIBul20Pou9CXEs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})