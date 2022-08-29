import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Account from './Account';
import "../style/MainMenu.css"
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';


const MainMenu = () => {
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = useState("Not Selected");
    const TOPICS_URL = '/topics';
    const [topics, setTopics] = useState([{name: 'Not Selected', companyId: {}}]);
    const { auth } = useAuth();
    const handleChange = async (e) => {
        setIsSelect(e.target.value);
        console.log(e.target.value)
    }
    useEffect(() => {
        const getTopics = async () => {
            const response = await axios.get(TOPICS_URL, {
                headers: ({
                    Authorization: 'Bearer ' + auth.token,
                })
            });
            const temp = [...topics, ...response.data]
            
            setTopics(temp);
        }
        getTopics();
    }, [])
    const location = useLocation();
    return (
        <>
            <div className="app2">
                <section>
                    <header>
                        <h2>Main Menu  {location.state.name}</h2>
                    </header>
                    <main>
                        <p> choose a field of study  
                            <select onChange={handleChange} >
                            {topics.filter(t => t.companyId.name === location.state.name).map((topic, i) => (<option value={topic.name} key={i}>{topic.name}</option>))}
                            </select>
                        </p>
                    </main>
                    {isSelect !== "Not Selected" ? (
                        <ul>
                            <li><Link to="/manageQuestions"> Manage Questions </Link> </li>
                            <li><Link to="/manageTests"> Manage Tests </Link></li>
                            <li><Link to="/reports"> Reports </Link> </li>
                        </ul>
                    ) : (
                        <p>select some topic</p>
                    )
                    }
                </section>
            </div>
        </>
    )
}

export default MainMenu