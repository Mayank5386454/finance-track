import React from "react";
import { useSummary } from "../hooks/useSummary";
import { fmt } from "../utils/helpers";

const InsightCard = ({ tag, value, desc, delay }) => (
  <div
    className="card p-5 animate-fade-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <p className="text-[10px] font-bold uppercase tracking-widest text-violet mb-2">
      {tag}
    </p>
    <p className="font-display text-xl text-white mb-1">{value}</p>
    <p className="text-xs text-muted">{desc}</p>
  </div>
);

export default function InsightsCards() {
  const {
    topCat,
    avgMonthlyExpense,
    bestMonth,
    incomeSrc,
    trendPct,
    catBreakdown,
  } = useSummary();

  const top2 = catBreakdown.slice(0, 2).map((c) => c.cat);

  const trendLabel =
    trendPct === 0
      ? "Stable"
      : trendPct > 0
      ? `+${trendPct}% ↑`
      : `${trendPct}% ↓`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <InsightCard
        tag="🔥 Top Spend"
        value={topCat ? `${topCat.cat} (${fmt(topCat.amt)})` : "—"}
        desc="Highest spending category overall"
        delay={0.05}
      />
      <InsightCard
        tag="📅 Monthly Avg"
        value={avgMonthlyExpense ? fmt(avgMonthlyExpense) : "—"}
        desc="Average monthly expenditure"
        delay={0.1}
      />
      <InsightCard
        tag="💰 Best Month"
        value={bestMonth}
        desc="Month with highest savings"
        delay={0.15}
      />
      <InsightCard
        tag="📊 Income Sources"
        value={incomeSrc.length ? incomeSrc.join(", ") : "—"}
        desc="Unique income categories"
        delay={0.2}
      />
      <InsightCard
        tag="⚠️ High Spend"
        value={top2.length ? top2.join(" & ") : "None"}
        desc="Top 2 expense categories"
        delay={0.25}
      />
      <InsightCard
        tag="📈 Trend"
        value={trendLabel}
        desc="Expense change vs last month"
        delay={0.3}
      />
    </div>
  );
}
