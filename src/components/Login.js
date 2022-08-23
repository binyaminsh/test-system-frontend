import "../style/Login.css";
import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // useRef.current.focus();
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser('');
    setPwd('');
    setSuccess(true);
    navigate("/Account")
  }

  return (
    <>
      <div className="app">
        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <Link to="/Account"> go to your account </Link>
            </p>
          </section>
        ) : (
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button> Sign In</button>
            </form>
            <p>
              Need an Account?
              <br />
              <span className="line">
                {/*put router link here*/}
                <a href="#">Sign Up</a>
              </span>
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default Login;
