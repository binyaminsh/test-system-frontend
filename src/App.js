import Account from './components/Account';
import Login from './components/Login';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import ManageQuestions from './components/ManageQuestions';
import ManageTests from './components/ManageTests';
import Reports from './components/Reports';
import { Route, Routes } from "react-router-dom";
import NewTest from './components/NewTest';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/MainMenu" element={<MainMenu />} />
        <Route path="/ManageQuestions" element={<ManageQuestions />} />
        <Route path="/ManageTests" element={<ManageTests />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/ManageTests" element={<ManageTests />} />
        <Route path='/NewTest' element={<NewTest />} />

      </Routes>
    </>
  );
}

export default App;
