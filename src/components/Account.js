import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getAllAccounts } from '../services/accountsService';

const Account = () => {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();
    const handleChange = async (e) => {
        navigate("/mainMenu", { state: { id: e.target.value } })
    }
    useEffect(() => {

        const getAccounts = async () => {
            const data = await getAllAccounts();
           
            const accountsDb = [...data]

            setAccounts(accountsDb);
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
                        {accounts.map((account, i) => (<option value={account._id} key={i}>{account.name}</option>))}
                    </select>
                </div>
            </div>
        </div >
    )
}

export default Account