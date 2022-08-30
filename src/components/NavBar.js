import React from "react";
import "../style/navBar.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function NavBar() {
  const { auth, setAuth } = useAuth();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const handleLogout = (e) => {
    setAuth({});
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  };
  return (
    <>
    <nav>
      <span>
        <h1 className="header">
          <Link to={"/account"}>Test</Link>
        </h1>
      </span>
      <span className="auth-button">
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </span>
      </nav>
    </>
  );
}

export default NavBar;
