import axios from "axios";
const token = localStorage.getItem("token");
const URL = process.env.REACT_APP_QUESTIONS_URL;
export const createQuestion = async (createQuestionDto) => {
    try {
        const response = await axios.post(URL, 
            JSON.stringify(createQuestionDto),{
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
export const getAllQuestions = async (topicId) => {
  try {
    const response = await axios.get(`${URL}?topicId=${topicId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
