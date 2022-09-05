import axios from 'axios';

export const getAllAccounts = async () => {
    const token = localStorage.getItem('token');
    const URL= process.env.REACT_APP_ACCOUNTS_URL;     
    try {
        const response = await axios.get(URL, {
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