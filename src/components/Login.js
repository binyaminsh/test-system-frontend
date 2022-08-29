import "../style/Login.css";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios, { axiosWithToken } from "../api/axios";
import useAuth from "../hooks/useAuth";
const LOGIN_URL = '/auth/login';


const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/account';
  const { auth, setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({username: user, password: pwd}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      )
      const token = response.data.token;
      
        setAuth({ user, pwd, token })
        setUser('');
        setPwd('');
        navigate(from, { replace: true})
      
    } catch (error) {
      if(!error.response){
        setErrMsg(error.message)
      }else if(error.response.status === 401){
        setErrMsg('username or password are incorrect');
      }
    }
  }

  return (
    <>
      <div className="app">
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
              <Link to={'/register'}>Sign Up</Link>
              </span>
            </p>
          </section>
      </div>
    </>
  );
};

export default Login;
