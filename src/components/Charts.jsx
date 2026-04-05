import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { useSummary } from "../hooks/useSummary";
import { fmt } from "../utils/helpers";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Tooltip, Legend, Filler
);

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: "#9898a8", font: { family: "DM Sans", size: 11 }, boxWidth: 12 },
    },
  },
  scales: {
    x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#9898a8", font: { family: "DM Sans" } } },
    y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#9898a8", font: { family: "DM Sans" } } },
  },
};

export function LineChart() {
  const { monthLabels, monthlyIncome, monthlyExpense } = useSummary();
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "Income",
        data: monthlyIncome,
        borderColor: "#34d399",
        backgroundColor: "rgba(52,211,153,0.08)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#34d399",
        pointRadius: 4,
      },
      {
        label: "Expense",
        data: monthlyExpense,
        borderColor: "#f87171",
        backgroundColor: "rgba(248,113,113,0.08)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#f87171",
        pointRadius: 4,
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        ...CHART_DEFAULTS,
        scales: {
          ...CHART_DEFAULTS.scales,
          y: {
            ...CHART_DEFAULTS.scales.y,
            ticks: {
              ...CHART_DEFAULTS.scales.y.ticks,
              callback: (v) => "₹" + v.toLocaleString("en-IN"),
            },
          },
        },
      }}
    />
  );
}

export function BarChart() {
  const { monthLabels, monthlyIncome, monthlyExpense } = useSummary();
  const data = {
    labels: monthLabels,
    datasets: [
      { label: "Income", data: monthlyIncome, backgroundColor: "rgba(52,211,153,0.75)", borderRadius: 6 },
      { label: "Expense", data: monthlyExpense, backgroundColor: "rgba(248,113,113,0.75)", borderRadius: 6 },
    ],
  };
  return (
    <Bar
      data={data}
      options={{
        ...CHART_DEFAULTS,
        scales: {
          x: { ...CHART_DEFAULTS.scales.x, grid: { display: false } },
          y: { ...CHART_DEFAULTS.scales.y },
        },
      }}
    />
  );
}

export function DoughnutChart() {
  const { catBreakdown } = useSummary();
  const data = {
    labels: catBreakdown.map((c) => c.cat),
    datasets: [
      {
        data: catBreakdown.map((c) => c.amt),
        backgroundColor: catBreakdown.map((c) => c.color),
        borderColor: "transparent",
        borderRadius: 4,
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        cutout: "68%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#9898a8",
              font: { family: "DM Sans", size: 10 },
              boxWidth: 10,
              padding: 8,
            },
          },
        },
      }}
    />
  );
}

export function PieChart() {
  const { catBreakdown } = useSummary();
  const data = {
    labels: catBreakdown.map((c) => c.cat),
    datasets: [
      {
        data: catBreakdown.map((c) => c.amt),
        backgroundColor: catBreakdown.map((c) => c.color),
        borderColor: "transparent",
      },
    ],
  };
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#9898a8",
              font: { family: "DM Sans", size: 10 },
              boxWidth: 10,
              padding: 6,
            },
          },
        },
      }}
    />
  );
}
