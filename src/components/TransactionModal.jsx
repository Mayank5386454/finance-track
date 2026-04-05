import React, { useState, useEffect } from "react";
import { useTransactions } from "../context/TransactionContext";
import { CATEGORIES } from "../data/seed";
import { today } from "../utils/helpers";

const EMPTY = { desc: "", amount: "", cat: "Food", type: "expense", date: today() };

export default function TransactionModal({ open, onClose, editData }) {
  const { addTransaction, updateTransaction } = useTransactions();
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setForm(editData ? { ...editData, amount: String(editData.amount) } : { ...EMPTY, date: today() });
      setError("");
    }
  }, [open, editData]);

  if (!open) return null;

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.desc.trim()) return setError("Description is required.");
    const amt = parseFloat(form.amount);
    if (!amt || amt <= 0) return setError("Enter a valid amount.");
    if (!form.date) return setError("Select a date.");

    const payload = { ...form, amount: amt };
    if (editData) {
      updateTransaction({ ...payload, id: editData.id });
    } else {
      addTransaction(payload);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-bg2 border border-white/[0.07] rounded-2xl p-8 w-full max-w-md animate-fade-up">
        <h3 className="font-display text-2xl text-white mb-6">
          {editData ? "Edit Transaction" : "Add Transaction"}
        </h3>

        {error && (
          <p className="text-xs text-danger bg-danger/10 border border-danger/20 rounded-lg px-3 py-2 mb-4">
            {error}
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="label">Type</label>
            <select className="input" value={form.type} onChange={(e) => set("type", e.target.value)}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <div>
            <label className="label">Amount (₹)</label>
            <input
              className="input"
              type="number"
              min="0"
              placeholder="0.00"
              value={form.amount}
              onChange={(e) => set("amount", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="label">Description</label>
          <input
            className="input"
            type="text"
            placeholder="e.g. Grocery shopping"
            value={form.desc}
            onChange={(e) => set("desc", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="label">Category</label>
            <select className="input" value={form.cat} onChange={(e) => set("cat", e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Date</label>
            <input
              className="input"
              type="date"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button className="btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={handleSave}>
            {editData ? "Update" : "Save Transaction"}
          </button>
        </div>
      </div>
    </div>
  );
}
