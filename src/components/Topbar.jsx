import React from "react";
import { useRole } from "../context/RoleContext";
import { todayFull } from "../utils/helpers";

export default function Topbar() {
  const { role, setRole, isViewer } = useRole();

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div>
          <h1 className="font-display text-2xl text-white">
            Good morning, <span className="text-accent">Alex 👋</span>
          </h1>
          <p className="text-xs text-muted mt-1">{todayFull()}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Role Switcher */}
          <div className="flex items-center gap-2 card px-3 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              Role:
            </span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-transparent border-none text-white text-sm font-semibold outline-none cursor-pointer"
            >
              <option value="admin">Admin</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-accent flex items-center justify-center text-sm font-bold text-white">
            A
          </div>
        </div>
      </div>

      {/* Viewer banner */}
      {isViewer && (
        <div className="mt-4 bg-violet/10 border border-violet/25 rounded-xl px-4 py-3 text-sm text-violet animate-fade-in">
          👁 You are in <strong>Viewer Mode</strong> — read-only access. Switch to Admin to add or edit transactions.
        </div>
      )}
    </div>
  );
}
