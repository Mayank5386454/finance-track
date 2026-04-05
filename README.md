# FinTrack 💰 — Personal Financial Dashboard

A production-grade financial dashboard built with **React + Tailwind CSS + JavaScript**.

![FinTrack Dashboard](https://via.placeholder.com/1200x630/0f0f11/c8f135?text=FinTrack+Dashboard)

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.x | UI framework |
| Tailwind CSS | 3.x | Utility-first styling |
| Chart.js + react-chartjs-2 | 4.x / 5.x | Data visualizations |
| React Context API | built-in | Global state management |
| localStorage | browser API | Data persistence |
| uuid | 9.x | Unique transaction IDs |

---

## ✨ Features

### Core Requirements
- ✅ **Dashboard Overview** — Summary cards: Total Balance, Income, Expenses, Savings Rate
- ✅ **Time-based Visualization** — Line chart: Balance trend over last 6 months
- ✅ **Categorical Visualization** — Doughnut chart: Spending breakdown by category
- ✅ **Transactions Section** — Full list with Date, Amount, Category, Type
- ✅ **Filtering** — By type (income/expense) and category
- ✅ **Search** — Real-time text search across description and category
- ✅ **Sorting** — Date ascending / descending toggle
- ✅ **Role-Based UI** — Admin (full CRUD) vs Viewer (read-only), switchable via dropdown
- ✅ **Insights Section** — Top spending category, monthly average, best month, trend analysis
- ✅ **State Management** — React Context + useReducer with localStorage persistence
- ✅ **Responsive Design** — Works on mobile, tablet, and desktop
- ✅ **Empty / No-data Handling** — Graceful empty states throughout

### CRUD Operations
- ✅ **Create** — Add transactions via modal (Admin only)
- ✅ **Read** — View all transactions with rich formatting
- ✅ **Update** — Edit any transaction inline via modal (Admin only)
- ✅ **Delete** — Remove transactions with one click (Admin only)

### Optional Enhancements
- ✅ **Dark mode** — Elegant dark-first design
- ✅ **Data persistence** — All data saved to localStorage
- ✅ **Animations & transitions** — Fade-up reveals, hover states, bar transitions
- ✅ **Advanced filtering** — Combine search + type + category filters simultaneously

---

## 📁 Project Structure

```
fintrack/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Navigation sidebar
│   │   ├── Topbar.jsx          # Top bar with role switcher
│   │   ├── SummaryCards.jsx    # 4 summary metric cards
│   │   ├── Charts.jsx          # All Chart.js chart components
│   │   ├── CategoryBars.jsx    # Category distribution bar chart
│   │   ├── TransactionTable.jsx# Full CRUD transaction table
│   │   ├── TransactionModal.jsx# Add / Edit transaction modal
│   │   ├── InsightsCards.jsx   # Insight metric cards
│   │   ├── Dashboard.jsx       # Dashboard page
│   │   ├── Transactions.jsx    # Transactions page
│   │   └── Insights.jsx        # Insights page
│   ├── context/
│   │   ├── TransactionContext.js # Global transactions state (useReducer + localStorage)
│   │   └── RoleContext.js        # Role state (admin / viewer)
│   ├── hooks/
│   │   └── useSummary.js         # Derived financial data (memoized)
│   ├── data/
│   │   └── seed.js               # Default transactions & category config
│   ├── utils/
│   │   └── helpers.js            # Formatting & date utilities
│   ├── App.js                    # Root component + page routing
│   ├── index.js                  # React entry point
│   └── index.css                 # Tailwind directives + global styles
├── tailwind.config.js            # Tailwind theme config
├── postcss.config.js             # PostCSS config
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have installed:
- **Node.js** v16+ → [nodejs.org](https://nodejs.org)
- **npm** v8+ (comes with Node.js)

### 1. Extract the ZIP

```bash
unzip fintrack.zip
cd fintrack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
```

Output will be in the `build/` folder, ready to deploy.

---

## 🏗️ Architecture & State Management

### Context API + useReducer

All transaction data lives in `TransactionContext` using `useReducer`:

```
ADD    → adds a new transaction (uuid generated)
UPDATE → merges updates into existing transaction
DELETE → removes by id
RESET  → restores seed data
```

Data is **automatically persisted** to `localStorage` on every change via `useEffect`.

### Role-Based UI

`RoleContext` provides `role`, `isAdmin`, `isViewer`. Components conditionally render based on role:

- **Admin** → Can see Add / Edit / Delete buttons; can open modal
- **Viewer** → Read-only; action buttons hidden; viewer banner shown

Switch roles using the dropdown in the top-right corner.

### useSummary Hook

`useSummary()` is a `useMemo`-based hook that derives all computed values (totals, monthly breakdown, category stats, insights) from the raw transactions array. This avoids recalculating on every render.

---

## 📊 Charts Used

| Chart | Library | Where Used |
|---|---|---|
| Line Chart | Chart.js | Balance Trend, Insights page |
| Bar Chart | Chart.js | Monthly Comparison |
| Doughnut Chart | Chart.js | Spending Breakdown |
| Pie Chart | Chart.js | Insights — Category Proportion |
| Bar (CSS) | Tailwind | Category Split bars |

---

## 🎨 Design System

Custom Tailwind theme defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `bg` | `#0f0f11` | Main background |
| `bg2` | `#17171a` | Sidebar background |
| `card` | `#1a1a1f` | Card backgrounds |
| `accent` | `#c8f135` | Primary accent (lime) |
| `violet` | `#7c6fff` | Secondary accent |
| `success` | `#34d399` | Income / positive |
| `danger` | `#f87171` | Expense / negative |
| `muted` | `#9898a8` | Secondary text |

Fonts: **DM Serif Display** (headings) + **DM Sans** (body)

---

## 🧪 Default Data

25 seed transactions across 6 months (Nov 2025 – Apr 2026) covering:
- Salary, Freelance, Investment (income)
- Food, Rent, Transport, Entertainment, Health, Utilities (expense)

Data is loaded from `localStorage` if available, otherwise from `src/data/seed.js`.

---

## 📝 License

MIT — free to use and modify.
