import React from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className="sidebar">{children}</div>;
}
