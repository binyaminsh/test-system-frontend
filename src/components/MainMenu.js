import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Account from './Account';
import "../style/MainMenu.css"


const MainMenu = () => {
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = useState("Not Selected");
    const handleChange = async (e) => {
        setIsSelect(e.target.value);

    }
    const options = [
        {

            label: "Not Selected",
            value: "Not Selected",
            id: "0",

        },
        {
            label: "Math",
            value: "Math",
            id: "1",
        },
        {
            label: "Hebrew",
            value: "Hebrew",
            id: "2",
        },
        {
            label: "English",
            value: "English",
            id: "2",
        },
        {
            label: "Arabic",
            value: "Arabic",
            id: "3",
        },
        {
            label: "French",
            value: "French",
            id: "4",
        },
        {
            label: "England",
            value: "England",
            id: "4",
        },

    ];
    const loctaion = useLocation();
    return (
        <>
            <div className="app2">
                <section>
                    <header>
                        <h2>Main Menu  {loctaion.state.userId}</h2>
                    </header>
                    <main>
                        <p> choose a field of study  <select onChange={handleChange} >
                            <option>{options[0].value}</option>
                            {options.filter(o => o.id === loctaion.state.userId).map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}
                        </select></p>
                    </main>
                    {isSelect !== "Not Selected" ? (
                        <ul>
                            <li><Link to="/ManageQuestions"> Manage Questions </Link> </li>
                            <li><Link to="/ManageTests"> Manage Tests </Link></li>
                            <li><Link to="/Reports"> Reports </Link> </li>
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