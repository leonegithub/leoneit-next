//// filepath: /src/context/AuthContext.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface User {
  Nome: string;
  Cognome: string;
}

interface AuthContextType {
  userId: string | null;
  setUserId: (id: string | null) => void;
  userData: User | null;
  setUserData: (data: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  userId: null,
  setUserId: () => {},
  userData: null,
  setUserData: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserId(localStorage.getItem("userId"));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId, setUserId, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
