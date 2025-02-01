import React, { useEffect, useState, createContext, useContext } from "react";
type UserRole = "student" | "staff" | "parent";
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);
  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock authentication logic
    const mockUser = {
      id: "123",
      name: role === "student" ? "John Doe" : role === "staff" ? "Prof. Smith" : "Mr. Johnson",
      email,
      role
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };
  return <AuthContext.Provider value={{
    user,
    login,
    logout,
    isAuthenticated
  }}>
      {children}
    </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}