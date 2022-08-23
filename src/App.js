import Account from './components/Account';
import Login from './components/Login';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/MainMenu" element={<MainMenu />} />
      </Routes>
    </>
  );
}

export default App;
