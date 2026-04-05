import React, { useState } from "react";
import { TransactionProvider } from "./context/TransactionContext";
import { RoleProvider } from "./context/RoleContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

const PAGES = {
  dashboard:    <Dashboard />,
  transactions: <Transactions />,
  insights:     <Insights />,
};

function AppShell() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Topbar */}
          <div className="mb-8">
            <Topbar />
          </div>

          {/* Page Content */}
          <div key={activeTab} className="animate-fade-up">
            {PAGES[activeTab]}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <TransactionProvider>
      <RoleProvider>
        <AppShell />
      </RoleProvider>
    </TransactionProvider>
  );
}
