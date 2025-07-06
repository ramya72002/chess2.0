'use client';

import Link from "next/link";
import { Home, LayoutList, Headphones, FlashLightning, Flag, Flame, LayoutDashboard, Database, PlaySquare, BarChart, Settings, Users, Funnel, BookOpen, MessageCircle, LogOut, Network, Zap } from "lucide-react";
import styles from './Home.module.scss';

export default function Home1() {
  const modules = [
    { name: "Academy", path: "/academy", icon: <Home size={32} /> },
    { name: "Simul", path: "/simul", icon: <Network size={32} /> },
    { name: "Classroom", path: "/classroom", icon: <Headphones size={32} /> },
    { name: "Studies", path: "/studies", icon: <LayoutList size={32} /> },
    { name: "Quiz", path: "/quiz", icon: <Zap size={32} /> },
    { name: "Assignment", path: "/assignment", icon: <Flag size={32} /> },
    { name: "Practice", path: "/practice", icon: <Flame size={32} /> },
    { name: "Board", path: "/board", icon: <LayoutDashboard size={32} /> },
    { name: "Database", path: "/database", icon: <Database size={32} /> },
    { name: "Game Area", path: "/game", icon: <PlaySquare size={32} /> },
    { name: "Reports", path: "/reports", icon: <BarChart size={32} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={32} /> },
    { name: "Tournaments", path: "/tournaments", icon: <Users size={32} /> },
    { name: "Leads", path: "/leads", icon: <Funnel size={32} /> },
    { name: "Courses", path: "/courses", icon: <BookOpen size={32} /> },
    { name: "Chat", path: "/chat", icon: <MessageCircle size={32} /> },
    { name: "Logout", path: "/logout", icon: <LogOut size={32} /> },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome coach firstname!</h1>
      <div className={styles.grid}>
        {modules.map((module, index) => (
          <Link key={index} href={module.path} className={styles.card}>
            {module.icon}
            <span>{module.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
