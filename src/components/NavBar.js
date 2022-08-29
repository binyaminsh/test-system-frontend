import React from "react";
import "../style/navBar.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function NavBar() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    setAuth({});
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
        {" "}
        {auth.user ? (
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
