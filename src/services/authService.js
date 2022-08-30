import axios from "axios";

  export async function login(username, password) {
    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const token = response.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', username);

    } catch (error) {
      if (error.message === 'Network Error') {
        return 'internal error';
      } else if (error.response.status === 401) {
        return "username or password are incorrect";
      }
    }
  }


