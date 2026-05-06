import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContext {
  user: User | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContext>({
  user: null,
  signOut: async () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>({
    id: 'demo-user',
    email: 'demo@ghxst.ai'
  });
  
  const signOut = async () => {
    // Mock sign out
    console.log('Signing out...');
  };
  
  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);