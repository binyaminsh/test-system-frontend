import React from 'react'
import { useNavigate } from "react-router-dom";


const Account = () => {

    const navigate = useNavigate();
    const handleChange = async (e) => {
        navigate("/MainMenu", { state: { userId: e.target.value } })

    }
    const options = [
        {

            label: "Not Selected",
            value: "Not Selected",
            id: "0",
        },
        {
            label: "Sela",
            value: "Sela",
            id: "1",
        },
        {
            label: "Microsof",
            value: "Microsof",
            id: "2",
        },
        {
            label: "Google",
            value: "Google",
            id: "3",
        },
        {
            label: "Amazon",
            value: "Amazon",
            id: "4",
        },
    ];


    return (
        <div>
            <div className='head'>
                <h2 > Administration System </h2>
            </div>
            <div >
                <p>choose your account?</p>
                <div>
                    <select onChange={handleChange} >
                        {options.map((option) => (<option value={option.id} key={option.value}>{option.label}</option>))}
                    </select>
                </div>
            </div>
        </div >
    )
}

export default Account