import axios from "axios";

export const getAllTopics = async (accountId) => {
  const token = localStorage.getItem("token");
  const URL = process.env.REACT_APP_TOPICS_URL + `account/${accountId}`;
  try {
    const response = await axios.get(URL, {
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
