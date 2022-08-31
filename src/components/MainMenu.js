import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../style/MainMenu.css";
import { getAllTopics } from "../services/topicsService";

const MainMenu = () => {
  const navigate = useNavigate();
  const [isSelect, setIsSelect] = useState("Not Selected");
  const [topics, setTopics] = useState([]);
  const location = useLocation();
  const accountId = location.state.id;
  const handleChange = (e) => {
    setIsSelect(e.target.value);
  };
  useEffect(() => {
    const getTopics = async () => {
      const data = await getAllTopics(accountId); 
      const temp = [...data];

      setTopics(temp);
    };
    getTopics();
  }, []);

  return (
    <>
      <div className="app2">
        <section>
          <header>
            <h2>Main Menu {}</h2>
          </header>
          <main>
            <p>
              {" "}
              choose a field of study
              <select onChange={handleChange}>
                <option value={"Not Selected"}>Not Selected</option>
                {topics
                  .map((topic, i) => (
                    <option value={topic._id} key={i}>
                      {topic.name}
                    </option>
                  ))}
              </select>
            </p>
          </main>
          {isSelect !== "Not Selected" ? (
            <ul>
              <li>
                <Link to={'/manageQuestions/' + isSelect}>Manage Question</Link>
              </li>
              <li>
                <Link to="/manageTests"> Manage Tests </Link>
              </li>
              <li>
                <Link to="/reports"> Reports </Link>{" "}
              </li>
            </ul>
          ) : (
            <p>select some topic</p>
          )}
        </section>
      </div>
    </>
  );
};

export default MainMenu;
