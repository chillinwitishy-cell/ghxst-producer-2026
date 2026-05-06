// Mock Supabase client for demo purposes
export const supabase = {
  auth: {
    onAuthStateChange: (callback: any) => ({ data: { subscription: { unsubscribe: () => {} } } }),
    getSession: async () => ({ data: { session: null } }),
    signOut: async () => ({ error: null })
  },
  from: (table: string) => ({
    select: (columns?: string) => ({
      eq: (column: string, value: any) => ({
        single: async () => ({ data: null, error: null }),
        maybeSingle: async () => ({ data: null, error: null }),
        order: (column: string, options?: any) => ({
          limit: (count: number) => ({ data: [], error: null })
        })
      }),
      order: (column: string, options?: any) => ({
        limit: (count: number) => ({ data: [], error: null })
      }),
      limit: (count: number) => ({ data: [], error: null })
    }),
    insert: (data: any) => ({
      select: () => ({
        single: async () => ({ data: { id: 'mock-id' }, error: null })
      })
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({ data: [], error: null })
    })
  }),
  storage: {
    from: (bucket: string) => ({
      upload: async (path: string, file: File) => ({ error: null })
    })
  },
  functions: {
    invoke: async (name: string, options: any) => ({ data: null, error: null })
  }
};