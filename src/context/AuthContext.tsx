import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  bankDetails: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  updateBalance: (newBalance: number) => void;
  updateBankDetails: (bankDetails: User['bankDetails']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock logged in state
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Pushp Deepak',
    email: 'push.deepak@gmail.com',
    balance: 15750,
    bankDetails: {
      accountNumber: '****1234',
      ifscCode: 'HDFC0001234',
      accountHolderName: 'Pushp Deepak'
    }
  });

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const updateBalance = (newBalance: number) => {
    if (user) {
      setUser({ ...user, balance: newBalance });
    }
  };

  const updateBankDetails = (bankDetails: User['bankDetails']) => {
    if (user) {
      setUser({ ...user, bankDetails });
    }
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      user,
      login,
      logout,
      updateBalance,
      updateBankDetails
    }}>
      {children}
    </AuthContext.Provider>
  );
};