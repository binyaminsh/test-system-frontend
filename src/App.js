import Account from './components/Account';
import Login from './components/Login';
import NavBar from './components/NavBar';
import MainMenu from './components/MainMenu';
import ManageQuestions from './components/ManageQuestions';
import ManageTests from './components/ManageTests';
import Reports from './components/Reports';
import { Route, Routes } from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import Register from './components/Register';
import NewTest from './components/NewTest';
import QuestionEditor from './components/QuestionEditor';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth />}>
          <Route path="/" element={<Account />} />
          <Route path="/account" element={<Account />} />
          <Route path="/mainMenu" element={<MainMenu />} />
          <Route path="manageQuestions" element={<ManageQuestions />} />
          <Route path="manageQuestions/create" element={<QuestionEditor />} />
          <Route path="/manageTests" element={<ManageTests />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
