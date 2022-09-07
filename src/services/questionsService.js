import axios from "axios";

const URL = process.env.REACT_APP_QUESTIONS_URL;
export const createQuestion = async (createQuestionDto) => {
  console.log(createQuestionDto)
  const token = localStorage.getItem("token");
    try {
        const response = await axios.post(URL, 
            createQuestionDto,{
            withCredentials: true,
            headers: ({
                Authorization: "Bearer " + token,
              }),
        });
        return response;
    } catch (error) {
        console.log(error.message);
    }
}
export const getAllQuestions = async (topicId) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${URL}?topicId=${topicId}`, {
      withCredentials: true,
      headers: ({
        Authorization: "Bearer " + token,
      }),
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updatedQuestion = async (id, updateQuestionDto) => {
  const token = localStorage.getItem("token");
  console.log(id)
  console.log(updateQuestionDto)
  try {
    const response = await axios.patch(`${URL}/${id}`, updateQuestionDto, {
      withCredentials: true,
      headers: ({
        Authorization: "Bearer " + token,
      }),
    });
    return response.data;
  } catch (error) {
    
  }
}
