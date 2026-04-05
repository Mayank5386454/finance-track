export const SEED_TRANSACTIONS = [
  { id: "1", date: "2026-04-01", desc: "April Salary",       cat: "Salary",        type: "income",  amount: 85000 },
  { id: "2", date: "2026-04-02", desc: "Grocery Store",      cat: "Food",          type: "expense", amount: 2400  },
  { id: "3", date: "2026-04-03", desc: "Uber Ride",          cat: "Transport",     type: "expense", amount: 350   },
  { id: "4", date: "2026-04-03", desc: "Netflix",            cat: "Entertainment", type: "expense", amount: 499   },
  { id: "5", date: "2026-03-31", desc: "March Salary",       cat: "Salary",        type: "income",  amount: 85000 },
  { id: "6", date: "2026-03-28", desc: "House Rent",         cat: "Rent",          type: "expense", amount: 18000 },
  { id: "7", date: "2026-03-25", desc: "Freelance Project",  cat: "Freelance",     type: "income",  amount: 12000 },
  { id: "8", date: "2026-03-22", desc: "Doctor Visit",       cat: "Health",        type: "expense", amount: 1500  },
  { id: "9", date: "2026-03-18", desc: "Electricity Bill",   cat: "Utilities",     type: "expense", amount: 1200  },
  { id: "10",date: "2026-03-15", desc: "Dining Out",         cat: "Food",          type: "expense", amount: 1800  },
  { id: "11",date: "2026-03-10", desc: "Mutual Funds Return",cat: "Investment",    type: "income",  amount: 5000  },
  { id: "12",date: "2026-03-05", desc: "Gym Membership",     cat: "Health",        type: "expense", amount: 999   },
  { id: "13",date: "2026-02-28", desc: "Feb Salary",         cat: "Salary",        type: "income",  amount: 85000 },
  { id: "14",date: "2026-02-25", desc: "House Rent",         cat: "Rent",          type: "expense", amount: 18000 },
  { id: "15",date: "2026-02-20", desc: "Freelance",          cat: "Freelance",     type: "income",  amount: 8000  },
  { id: "16",date: "2026-02-15", desc: "Zomato Orders",      cat: "Food",          type: "expense", amount: 2100  },
  { id: "17",date: "2026-02-10", desc: "Metro Card",         cat: "Transport",     type: "expense", amount: 800   },
  { id: "18",date: "2026-01-31", desc: "Jan Salary",         cat: "Salary",        type: "income",  amount: 85000 },
  { id: "19",date: "2026-01-28", desc: "House Rent",         cat: "Rent",          type: "expense", amount: 18000 },
  { id: "20",date: "2026-01-20", desc: "Shopping",           cat: "Entertainment", type: "expense", amount: 3200  },
  { id: "21",date: "2025-12-31", desc: "Dec Salary",         cat: "Salary",        type: "income",  amount: 85000 },
  { id: "22",date: "2025-12-25", desc: "Christmas Party",    cat: "Entertainment", type: "expense", amount: 4500  },
  { id: "23",date: "2025-12-20", desc: "House Rent",         cat: "Rent",          type: "expense", amount: 18000 },
  { id: "24",date: "2025-11-30", desc: "Nov Salary",         cat: "Salary",        type: "income",  amount: 85000 },
  { id: "25",date: "2025-11-25", desc: "House Rent",         cat: "Rent",          type: "expense", amount: 18000 },
];

export const CATEGORIES = [
  "Food", "Salary", "Rent", "Transport",
  "Entertainment", "Health", "Utilities",
  "Freelance", "Investment", "Other",
];

export const CAT_COLORS = {
  Food:          "#fbbf24",
  Salary:        "#34d399",
  Rent:          "#f87171",
  Transport:     "#7c6fff",
  Entertainment: "#c8f135",
  Health:        "#60a5fa",
  Utilities:     "#a78bfa",
  Freelance:     "#34d399",
  Investment:    "#c8f135",
  Other:         "#9898a8",
};

export const CAT_BG = {
  Food:          "bg-amber-400/10 text-amber-400",
  Salary:        "bg-emerald-400/10 text-emerald-400",
  Rent:          "bg-red-400/10 text-red-400",
  Transport:     "bg-violet-400/10 text-violet-400",
  Entertainment: "bg-lime-400/10 text-lime-400",
  Health:        "bg-blue-400/10 text-blue-400",
  Utilities:     "bg-purple-400/10 text-purple-400",
  Freelance:     "bg-emerald-400/10 text-emerald-400",
  Investment:    "bg-lime-400/10 text-lime-400",
  Other:         "bg-zinc-400/10 text-zinc-400",
};
