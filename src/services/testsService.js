import axios from 'axios';
const token = localStorage.getItem('token');
const URL = process.env.REACT_APP_TESTS_URL;
export const createTest = async (createTestDto) => {
    try {
        const response = await axios.post(URL,
            JSON.stringify(createTestDto), {
            withCredentials: true,
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return response;
    } catch (error) {
        console.log(error.message);
    }
}
export const getAllTests = async (topicId) => {

    try {
        const response = await axios.get(`${URL}?topicId=630dd84c5116916b919c1201`, {
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