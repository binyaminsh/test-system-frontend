import React from 'react'
import { useNavigate } from "react-router-dom";


const Account = () => {

    const navigate = useNavigate();
    const handleChange = async (e) => {
        navigate("/MainMenu")
    }
    const options = [
        {
            label: "Sela",
            value: "Sela",
        },
        {
            label: "Microsof",
            value: "Microsof",
        },
        {
            label: "Google",
            value: "Google",
        },
        {
            label: "Amazon",
            value: "Amazon",
        },
    ];


    return (
        <div>
            <div className='head'>
                <h2 > Administration System </h2>
            </div>
            <div >
                <div>
                    <select onChange={handleChange} >
                        {options.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}
                    </select>
                </div>
            </div>
        </div >
    )
}

export default Account