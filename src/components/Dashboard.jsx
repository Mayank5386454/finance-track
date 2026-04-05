import React from "react";
import SummaryCards from "../components/SummaryCards";
import { LineChart, DoughnutChart, BarChart } from "../components/Charts";
import CategoryBars from "../components/CategoryBars";
import TransactionTable from "../components/TransactionTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <SummaryCards />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 card p-6">
          <h2 className="font-display text-xl text-white mb-1">Balance Trend</h2>
          <p className="text-xs text-muted mb-5">Monthly income vs expenses (last 6 months)</p>
          <div className="h-56">
            <LineChart />
          </div>
        </div>
        <div className="card p-6">
          <h2 className="font-display text-xl text-white mb-1">Spending Breakdown</h2>
          <p className="text-xs text-muted mb-5">By category — all time</p>
          <div className="h-56">
            <DoughnutChart />
          </div>
        </div>
      </div>

      {/* Category Bars + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CategoryBars />
        <div className="card p-6">
          <h2 className="font-display text-xl text-white mb-1">Monthly Comparison</h2>
          <p className="text-xs text-muted mb-5">Income vs Expense per month</p>
          <div className="h-52">
            <BarChart />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <TransactionTable showAll={false} />
    </div>
  );
}
