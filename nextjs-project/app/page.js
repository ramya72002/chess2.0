'use client';

import Link from "next/link";

export default function Home() {
  const modules = [
    { name: "Academy Simulator", path: "/academy-simulator" },
    { name: "Classroom Studies", path: "/classroom-studies" },
    { name: "Quiz", path: "/quiz" },
    { name: "Remaining Module", path: "/remaining-module" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Welcome to the Learning Modules
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {modules.map((module, index) => (
          <Link
            key={index}
            href={module.path}
            style={{
              padding: "1rem 2rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#333",
              backgroundColor: "#f9f9f9",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#f9f9f9")}
          >
            {module.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
