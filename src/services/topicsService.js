import axios from "axios";

export const getAllTopics = async (accountId) => {
  const token = localStorage.getItem("token");
  const GET_TOPICS_BY_ACCOUNT = process.env.REACT_APP_TOPICS_URL + `account/${accountId}`;
  try {
    const response = await axios.get(GET_TOPICS_BY_ACCOUNT, {
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
