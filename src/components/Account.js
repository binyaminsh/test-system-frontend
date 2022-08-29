import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';
import { axiosWithToken } from '../api/axios';
import useAuth from '../hooks/useAuth';

const Account = () => {
    const [accounts, setAccounts] = useState([{name: 'not selected'}]);
    const { auth } = useAuth();
    const ACCOUNTS_URL = '/companies';
    const navigate = useNavigate();
    const handleChange = async (e) => {
        console.log(e.target.value)
        navigate("/mainMenu", { state: { name: e.target.value } })

    }
    useEffect(() => {
        
        const getAccounts = async () => {
            
            const response = await axios.get(ACCOUNTS_URL, {
                headers: ({
                    Authorization: 'Bearer ' + auth.token,
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
                        {accounts.map((account, i) => (<option value={account.name} key={i}>{account.name}</option>))}
                    </select>
                </div>
            </div>
        </div >
    )
}

export default Account