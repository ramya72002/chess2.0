'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home, LayoutList, Headphones, Zap, Flag, Flame,
  LayoutDashboard, Database, PlaySquare, BarChart,
  Settings, Users, Funnel, BookOpen, MessageCircle, LogOut, Network, Gauge
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
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutPopup(true);
  };

  const handleConfirmLogout = () => {
    // Optional: localStorage/session clear
    // localStorage.removeItem('token');
    setShowLogoutPopup(false);
    router.push("/");
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-links">
          {modules.map((mod, i) => {
            const isActive = pathname === mod.path;
            return (
              <Link
                key={i}
                href={mod.path}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                {mod.icon}
                <span>{mod.name}</span>
              </Link>
            );
          })}
        </div>

        {/* 🔘 Logout Button at Bottom */}
        <div className="sidebar-logout">
          <a
            href="#"
            onClick={handleLogoutClick}
            className="sidebar-link"
          >
            <LogOut size={24} />
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* 🔔 Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            textAlign: 'center',
            minWidth: '300px'
          }}>
            <h2 style={{ color: 'black' }}>Are you sure you want to logout?</h2>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-around' }}>
              <button
                onClick={handleCancelLogout}
                style={{
                  padding: '0.5rem 1.2rem',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: '#000000'
                }}>
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                style={{
                  padding: '0.5rem 1.2rem',
                  cursor: 'pointer',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px'
                }}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
