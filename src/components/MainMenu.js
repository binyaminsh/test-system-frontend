import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/MainMenu.css";
import { getAllTopics } from "../services/topicsService";

const MainMenu = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState()
  const location = useLocation();
  const accountId = location.state.id;
  const handleChange = (e) => {
    const currentTopic = topics.find(t => t._id === e.target.value);
    setSelectedTopic(currentTopic)
  };
  useEffect(() => {
    const getTopics = async () => {
      const data = await getAllTopics(accountId); 
      setTopics(data);
      if(data.length > 0) {
        setSelectedTopic(data[0])
      }
    };
    getTopics();
  }, []);

  return (
    <>
      <div className="app2">
        <section>
          <header>
            <h2>Main Menu</h2>
          </header>
          <main>
            <p>
              {" "}
              choose a field of study
              <select onChange={handleChange}>
                {topics
                  .map((topic) => (
                    <option value={topic._id} key={topic._id}>
                      {topic.name}
                    </option>
                  ))}
              </select>
            </p>
          </main>
            <ul>
              <li>
                <Link to={'/manageQuestions'} state={{selectedTopic}}>Manage Question</Link>
              </li>
              <li>
                <Link to="/manageTests"> Manage Tests </Link>
              </li>
              <li>
                <Link to="/reports"> Reports </Link>{" "}
              </li>
            </ul>
        </section>
      </div>
    </>
  );
};

export default MainMenu;
