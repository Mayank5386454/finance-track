import React, { useState, useMemo } from "react";
import { useTransactions } from "../context/TransactionContext";
import { useRole } from "../context/RoleContext";
import { CAT_BG } from "../data/seed";
import { fmt, formatDate } from "../utils/helpers";
import TransactionModal from "./TransactionModal";

export default function TransactionTable({ showAll = true }) {
  const { transactions, deleteTransaction } = useTransactions();
  const { isAdmin } = useRole();

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [sortAsc, setSortAsc] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const allCats = useMemo(
    () => [...new Set(transactions.map((t) => t.cat))].sort(),
    [transactions]
  );

  const filtered = useMemo(() => {
    let list = [...transactions];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) => t.desc.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q)
      );
    }
    if (filterType) list = list.filter((t) => t.type === filterType);
    if (filterCat) list = list.filter((t) => t.cat === filterCat);
    list.sort((a, b) =>
      sortAsc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
    );
    if (!showAll) list = list.slice(0, 5);
    return list;
  }, [transactions, search, filterType, filterCat, sortAsc, showAll]);

  const openAdd = () => { setEditData(null); setModalOpen(true); };
  const openEdit = (tx) => { setEditData(tx); setModalOpen(true); };

  return (
    <>
      <div className="card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <h2 className="font-display text-xl text-white">
            {showAll ? "All Transactions" : "Recent Transactions"}
          </h2>

          {showAll && (
            <div className="flex flex-wrap items-center gap-2">
              {/* Search */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs">🔍</span>
                <input
                  className="input pl-7 w-44 text-xs"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Type filter */}
              <select
                className="input w-32 text-xs"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              {/* Category filter */}
              <select
                className="input w-36 text-xs"
                value={filterCat}
                onChange={(e) => setFilterCat(e.target.value)}
              >
                <option value="">All Categories</option>
                {allCats.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              {/* Sort */}
              <button
                className="btn-ghost text-xs flex items-center gap-1"
                onClick={() => setSortAsc((p) => !p)}
              >
                ⇅ Date {sortAsc ? "↑" : "↓"}
              </button>

              {/* Add */}
              {isAdmin && (
                <button className="btn-primary text-xs" onClick={openAdd}>
                  + Add
                </button>
              )}
            </div>
          )}

          {!showAll && isAdmin && (
            <button className="btn-primary text-xs" onClick={openAdd}>+ Add</button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {["Date", "Description", "Category", "Type", "Amount"].map((h) => (
                  <th
                    key={h}
                    className="text-[10px] font-semibold uppercase tracking-widest text-faint text-left px-3 py-2.5 border-b border-white/[0.07]"
                  >
                    {h}
                  </th>
                ))}
                {isAdmin && (
                  <th className="text-[10px] font-semibold uppercase tracking-widest text-faint text-center px-3 py-2.5 border-b border-white/[0.07]">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={isAdmin ? 6 : 5}
                    className="text-center py-12 text-muted text-sm"
                  >
                    No transactions found.
                  </td>
                </tr>
              ) : (
                filtered.map((tx) => (
                  <tr key={tx.id} className="tx-row">
                    <td className="px-3 py-3.5 text-xs text-muted whitespace-nowrap">
                      {formatDate(tx.date)}
                    </td>
                    <td className="px-3 py-3.5 text-sm">{tx.desc}</td>
                    <td className="px-3 py-3.5">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          CAT_BG[tx.cat] || "bg-zinc-400/10 text-zinc-400"
                        }`}
                      >
                        {tx.cat}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                          tx.type === "income"
                            ? "bg-success/10 text-success"
                            : "bg-danger/10 text-danger"
                        }`}
                      >
                        {tx.type}
                      </span>
                    </td>
                    <td
                      className={`px-3 py-3.5 text-sm font-semibold text-right whitespace-nowrap ${
                        tx.type === "income" ? "text-success" : "text-danger"
                      }`}
                    >
                      {tx.type === "income" ? "+" : "-"}
                      {fmt(tx.amount)}
                    </td>
                    {isAdmin && (
                      <td className="px-3 py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => openEdit(tx)}
                            className="text-xs px-2.5 py-1 rounded-lg bg-violet/10 text-violet hover:bg-violet/20 transition-colors"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => deleteTransaction(tx.id)}
                            className="text-xs px-2.5 py-1 rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-colors"
                          >
                            🗑
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <TransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        editData={editData}
      />
    </>
  );
}
