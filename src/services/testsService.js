import axios from 'axios';

const URL = process.env.REACT_APP_TESTS_URL;
export const createTest = async (createTestDto) => {
    const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    try {
        const response = await axios.get(`${URL}/ByTopic?topicId=${topicId}`, {
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