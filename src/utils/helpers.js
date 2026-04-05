// Format number as Indian Rupees
export const fmt = (n) =>
  "₹" + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 0 });

// Get YYYY-MM from date string
export const getMonth = (dateStr) => dateStr.substring(0, 7);

// Get last N month strings (YYYY-MM)
export const getLastNMonths = (n) => {
  const months = [];
  const d = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const m = new Date(d.getFullYear(), d.getMonth() - i, 1);
    months.push(
      m.getFullYear() +
        "-" +
        (m.getMonth() + 1).toString().padStart(2, "0")
    );
  }
  return months;
};

// Format date for display
export const formatDate = (s) => {
  const d = new Date(s + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Month label short (e.g. Apr)
export const monthLabel = (ym) => {
  const d = new Date(ym + "-01");
  return d.toLocaleString("default", { month: "short" });
};

// Get today in YYYY-MM-DD
export const today = () => new Date().toISOString().substring(0, 10);

// Today's human-readable date
export const todayFull = () =>
  new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
