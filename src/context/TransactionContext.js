import React, { createContext, useContext, useReducer, useEffect } from "react";
import { SEED_TRANSACTIONS } from "../data/seed";
import { v4 as uuidv4 } from "uuid";

const LS_KEY = "fintrack_transactions";

// Load persisted or fall back to seed
const loadInitial = () => {
  try {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) return JSON.parse(stored);
  } catch (_) {}
  return SEED_TRANSACTIONS;
};

// ---- REDUCER ----
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.payload, id: uuidv4() }];
    case "UPDATE":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload } : t
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    case "RESET":
      return SEED_TRANSACTIONS;
    default:
      return state;
  }
}

// ---- CONTEXT ----
const TransactionContext = createContext(null);

export function TransactionProvider({ children }) {
  const [transactions, dispatch] = useReducer(reducer, null, loadInitial);

  // Persist on every change
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (data) => dispatch({ type: "ADD", payload: data });
  const updateTransaction = (data) => dispatch({ type: "UPDATE", payload: data });
  const deleteTransaction = (id) => dispatch({ type: "DELETE", payload: id });
  const resetData = () => dispatch({ type: "RESET" });

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, updateTransaction, deleteTransaction, resetData }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransactions = () => {
  const ctx = useContext(TransactionContext);
  if (!ctx) throw new Error("useTransactions must be inside TransactionProvider");
  return ctx;
};
