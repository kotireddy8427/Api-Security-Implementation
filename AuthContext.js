import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const res = await axiosInstance.post("/auth/login", { email, password });
    localStorage.setItem("accessToken", res.data.accessToken);
    setUser(res.data.user);
  };

  const logout = async () => {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const res = await axiosInstance.get("/auth/me");
      setUser(res.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
