import React from "react";
import { useSummary } from "../hooks/useSummary";
import { fmt } from "../utils/helpers";

const cards = [
  {
    key: "balance",
    label: "Total Balance",
    icon: "💳",
    colorClass: "text-white",
    accentBg: "bg-accent/10",
    getValue: (s) => fmt(s.balance),
    badge: "Net position",
    badgeClass: "badge bg-success/10 text-success",
  },
  {
    key: "income",
    label: "Total Income",
    icon: "📈",
    colorClass: "text-success",
    accentBg: "bg-success/10",
    getValue: (s) => fmt(s.income),
    badge: "↑ All time",
    badgeClass: "badge bg-success/10 text-success",
  },
  {
    key: "expense",
    label: "Total Expenses",
    icon: "📉",
    colorClass: "text-danger",
    accentBg: "bg-danger/10",
    getValue: (s) => fmt(s.expense),
    badge: "↓ All time",
    badgeClass: "badge bg-danger/10 text-danger",
  },
  {
    key: "savings",
    label: "Savings Rate",
    icon: "🏦",
    colorClass: "text-violet",
    accentBg: "bg-violet/10",
    getValue: (s) => s.savingsRate + "%",
    badge: "of total income",
    badgeClass: "badge bg-violet/10 text-violet",
  },
];

export default function SummaryCards() {
  const summary = useSummary();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <div
          key={c.key}
          className="card p-5 relative overflow-hidden hover:-translate-y-0.5 transition-transform animate-fade-up"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {/* Glow blob */}
          <div
            className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${c.accentBg} blur-xl`}
          />
          <span className="absolute top-4 right-4 text-xl opacity-50">
            {c.icon}
          </span>
          <p className="label">{c.label}</p>
          <p className={`font-display text-3xl ${c.colorClass} mb-2`}>
            {c.getValue(summary)}
          </p>
          <span className={c.badgeClass}>{c.badge}</span>
        </div>
      ))}
    </div>
  );
}
