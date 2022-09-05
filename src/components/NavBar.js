import React from "react";
import "../style/navBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const isLoginPage = location.pathname.includes('login');
  const navigate = useNavigate();
  const handleLogout = (e) => {
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
        {token ? 
        (
          <button onClick={handleLogout}>Logout</button>
        ) : isLoginPage ? null :
        (
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
