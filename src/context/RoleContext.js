import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext(null);

export function RoleProvider({ children }) {
  const [role, setRole] = useState("admin"); // "admin" | "viewer"
  const isAdmin = role === "admin";
  const isViewer = role === "viewer";
  return (
    <RoleContext.Provider value={{ role, setRole, isAdmin, isViewer }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRole = () => {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be inside RoleProvider");
  return ctx;
};
