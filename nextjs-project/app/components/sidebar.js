// /app/components/Sidebar.js
'use client';

import Link from "next/link";
import {
  Home, LayoutList, Headphones, Zap, Flag, Flame,
  LayoutDashboard, Database, PlaySquare, BarChart,
  Settings, Users, Funnel, BookOpen, MessageCircle, LogOut, Network,Gauge
} from "lucide-react";

import "../styles/withSidebar.scss";

const modules = [
  { name: "Dashboard", path: "/", icon: <Gauge size={24} /> },
  { name: "Academy", path: "/academy", icon: <Home size={24} /> },
  { name: "Simul", path: "/simul", icon: <Network size={24} /> },
  { name: "Classroom", path: "/classroom", icon: <Headphones size={24} /> },
  { name: "Studies", path: "/studies", icon: <LayoutList size={24} /> },
  { name: "Quiz", path: "/quiz", icon: <Zap size={24} /> },
  { name: "Assignment", path: "/assignment", icon: <Flag size={24} /> },
  { name: "Practice", path: "/practice", icon: <Flame size={24} /> },
  { name: "Board", path: "/board", icon: <LayoutDashboard size={24} /> },
  { name: "Database", path: "/database", icon: <Database size={24} /> },
  { name: "Game Area", path: "/game", icon: <PlaySquare size={24} /> },
  { name: "Reports", path: "/reports", icon: <BarChart size={24} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={24} /> },
  { name: "Tournaments", path: "/tournaments", icon: <Users size={24} /> },
  { name: "Leads", path: "/leads", icon: <Funnel size={24} /> },
  { name: "Courses", path: "/courses", icon: <BookOpen size={24} /> },
  { name: "Chat", path: "/chat", icon: <MessageCircle size={24} /> },
  { name: "Logout", path: "/logout", icon: <LogOut size={24} /> },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {modules.map((mod, i) => (
        <Link key={i} href={mod.path} className="sidebar-link">
          {mod.icon}
          <span>{mod.name}</span>
        </Link>
      ))}
    </aside>
  );
}
