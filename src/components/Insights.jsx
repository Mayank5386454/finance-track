import React from "react";
import InsightsCards from "../components/InsightsCards";
import { LineChart, PieChart } from "../components/Charts";

export default function Insights() {
  return (
    <div className="flex flex-col gap-6">
      <InsightsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-6">
          <h2 className="font-display text-xl text-white mb-1">
            Income vs Expense Over Time
          </h2>
          <p className="text-xs text-muted mb-5">Monthly comparison — last 6 months</p>
          <div className="h-60">
            <LineChart />
          </div>
        </div>
        <div className="card p-6">
          <h2 className="font-display text-xl text-white mb-1">Expense Categories</h2>
          <p className="text-xs text-muted mb-5">Proportion of spending by category</p>
          <div className="h-60">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
