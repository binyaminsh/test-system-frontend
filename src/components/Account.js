import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';


const Account = () => {
    const [accounts, setAccounts] = useState([]);
    const token = localStorage.getItem('token');
    const ACCOUNTS_URL = '/companies';
    const navigate = useNavigate();
    const handleChange = async (e) => {
        navigate("/mainMenu", { state: { name: e.target.value } })

    }
    useEffect(() => {
        
        const getAccounts = async () => {
            
            const response = await axios.get(ACCOUNTS_URL, {
                headers: ({
                    Authorization: 'Bearer ' + token,
                })
            });
            const a = [...accounts, ...response.data]
            setAccounts(a);
        }
        getAccounts();
      }, []);

    return (
        <div>
            <div className='head'>
                <h2 > Administration System </h2>
            </div>
            <div >
                <p>choose your account?</p>
                <div>
                    <select onChange={handleChange} >
                        <option value={'Not Selected'}>Not Selected</option>
                        {accounts.map((account, i) => (<option value={account.name} key={i}>{account.name}</option>))}
                    </select>
                </div>
            </div>
        </div >
    )
}

export default Account