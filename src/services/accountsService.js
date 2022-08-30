import axios from 'axios';

export const getAllAccounts = async () => {
    const token = localStorage.getItem('token');
    const GET_ALL_ACCOUNTS= process.env.REACT_APP_ACCOUNTS_URL;     
    try {
        const response = await axios.get(GET_ALL_ACCOUNTS, {
            withCredentials: true,
            headers: ({
                Authorization: 'Bearer ' + token,
            })
        });

        return response.data;
    } catch (error) {
        console.log(error.message)
    }
       


}