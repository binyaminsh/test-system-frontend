import React from 'react'
import { useNavigate } from "react-router-dom";


const MainMenu = () => {
    const navigate = useNavigate();
    const handleChange = async (e) => {
        navigate("/MainMenu")
    }
    const options = [
        {

            label: "Not Selected",
            value: "Not Selected",
        },
        {
            label: "Math",
            value: "Math",
        },
        {
            label: "Hebrew",
            value: "Hebrew",
        },
        {
            label: "English",
            value: "English",
        },
        {
            label: "Arabic",
            value: "Arabic",
        },

    ];
    return (
        <>
            <header>
                <h2>MainMenu</h2>
            </header>
            <main>
                <p> choose a field of study  <select value={"Not Selected"} onChange={handleChange} >
                    {options.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}
                </select></p>
        </main>
        </>
    )
}

export default MainMenu