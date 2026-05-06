import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContext {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContext>({
  user: null,
  loading: false,
  signOut: async () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>({
    id: 'demo-user',
    email: 'demo@ghxst.ai'
  });
  const [loading] = useState(false);
  
  const signOut = async () => {
    console.log('Signing out...');
  };
  
  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);