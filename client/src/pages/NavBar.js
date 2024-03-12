import React from "react";
import { Link } from "react-router-dom";

function Navbar({ organizationName }) {
  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px", marginBottom: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
          <h1>Corporate Cricket</h1>
        </Link>
        <div>
          <button style={{ marginRight: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", padding: "8px 16px", cursor: "pointer" }}>
            Profile
          </button>
          <span style={{ fontWeight: "bold", color: "yellow" }}>{organizationName}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
