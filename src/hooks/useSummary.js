import { useMemo } from "react";
import { useTransactions } from "../context/TransactionContext";
import { getMonth, getLastNMonths, monthLabel } from "../utils/helpers";
import { CAT_COLORS } from "../data/seed";

export function useSummary() {
  const { transactions } = useTransactions();

  return useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((s, t) => s + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((s, t) => s + t.amount, 0);
    const balance = income - expense;
    const savingsRate = income > 0 ? Math.round((balance / income) * 100) : 0;

    // Category breakdown (expenses only)
    const catMap = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        catMap[t.cat] = (catMap[t.cat] || 0) + t.amount;
      });
    const catBreakdown = Object.entries(catMap)
      .sort((a, b) => b[1] - a[1])
      .map(([cat, amt]) => ({
        cat,
        amt,
        color: CAT_COLORS[cat] || "#9898a8",
        pct: Math.round((amt / (expense || 1)) * 100),
      }));

    // Monthly data (last 6 months)
    const months = getLastNMonths(6);
    const monthlyIncome = months.map((m) =>
      transactions
        .filter((t) => t.type === "income" && getMonth(t.date) === m)
        .reduce((s, t) => s + t.amount, 0)
    );
    const monthlyExpense = months.map((m) =>
      transactions
        .filter((t) => t.type === "expense" && getMonth(t.date) === m)
        .reduce((s, t) => s + t.amount, 0)
    );
    const monthLabels = months.map(monthLabel);

    // Insights
    const topCat = catBreakdown[0] || null;
    const uniqueMonths = [...new Set(transactions.filter(t=>t.type==="expense").map(t=>getMonth(t.date)))];
    const avgMonthlyExpense = uniqueMonths.length
      ? Math.round(expense / uniqueMonths.length)
      : 0;

    const monthData = {};
    transactions.forEach((t) => {
      const m = getMonth(t.date);
      if (!monthData[m]) monthData[m] = { inc: 0, exp: 0 };
      if (t.type === "income") monthData[m].inc += t.amount;
      else monthData[m].exp += t.amount;
    });
    const bestMonthKey = Object.entries(monthData).sort(
      (a, b) => b[1].inc - b[1].exp - (a[1].inc - a[1].exp)
    )[0];
    const bestMonth = bestMonthKey
      ? new Date(bestMonthKey[0] + "-01").toLocaleString("default", {
          month: "long",
          year: "numeric",
        })
      : "—";

    const incomeSrc = [
      ...new Set(transactions.filter((t) => t.type === "income").map((t) => t.cat)),
    ];

    const lastTwoMonths = getLastNMonths(2);
    const thisMonthExp = transactions
      .filter((t) => t.type === "expense" && getMonth(t.date) === lastTwoMonths[1])
      .reduce((s, t) => s + t.amount, 0);
    const lastMonthExp = transactions
      .filter((t) => t.type === "expense" && getMonth(t.date) === lastTwoMonths[0])
      .reduce((s, t) => s + t.amount, 0);
    const trendPct =
      lastMonthExp > 0
        ? Math.round(((thisMonthExp - lastMonthExp) / lastMonthExp) * 100)
        : 0;

    return {
      income,
      expense,
      balance,
      savingsRate,
      catBreakdown,
      monthLabels,
      monthlyIncome,
      monthlyExpense,
      topCat,
      avgMonthlyExpense,
      bestMonth,
      incomeSrc,
      trendPct,
    };
  }, [transactions]);
}
