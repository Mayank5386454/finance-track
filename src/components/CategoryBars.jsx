import React from "react";
import { useSummary } from "../hooks/useSummary";
import { fmt } from "../utils/helpers";

export default function CategoryBars() {
  const { catBreakdown } = useSummary();

  return (
    <div className="card p-6">
      <h2 className="font-display text-xl text-white mb-1">Category Split</h2>
      <p className="text-xs text-muted mb-5">Expense distribution by category</p>
      <div className="flex flex-col gap-3.5">
        {catBreakdown.length === 0 ? (
          <p className="text-sm text-muted py-4 text-center">No expense data yet.</p>
        ) : (
          catBreakdown.map((c) => (
            <div key={c.cat} className="flex items-center gap-3">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: c.color }}
              />
              <span className="text-xs w-24 shrink-0">{c.cat}</span>
              <div className="flex-1 bg-bg3 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${c.pct}%`, background: c.color }}
                />
              </div>
              <span className="text-xs text-muted w-16 text-right shrink-0">
                {fmt(c.amt)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
