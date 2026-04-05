import React from "react";

const NAV = [
  { id: "dashboard",    icon: "▦", label: "Dashboard"    },
  { id: "transactions", icon: "↕", label: "Transactions" },
  { id: "insights",     icon: "◈", label: "Insights"     },
];

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-[220px] bg-bg2 border-r border-white/[0.07] flex flex-col h-screen sticky top-0 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-white/[0.07]">
        <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center font-bold text-bg text-base">
          F
        </div>
        <span className="font-display text-xl text-white">FinTrack</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 pt-4">
        <p className="px-6 text-[10px] font-semibold uppercase tracking-widest text-faint mb-2">
          Menu
        </p>
        {NAV.map((item) => (
          <div
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`nav-item ${activeTab === item.id ? "nav-item-active" : ""}`}
          >
            <span className="text-base w-4 text-center">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-white/[0.07]">
        <p className="text-[10px] text-faint">FinTrack v1.0</p>
        <p className="text-xs text-muted mt-0.5">Personal Finance</p>
      </div>
    </aside>
  );
}
