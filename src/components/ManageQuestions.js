import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionList from "./QuestionList";
import { getAllQuestions } from '../services/questionsService';
const ManageQuestions = () => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
   
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const data = await getAllQuestions(topic);
        const temp = [...data];
        console.log(temp)
        setQuestions(temp);
       
      } catch (error) {
        console.log(error.message);
      }
    }
    getQuestions();
    
  }, [])
  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickNewQuestion = () => {
    //navigate(`/questionEditor`, { state: { topicName: topicId } });
  };
  return (
    <main>
      
      {questions.length > 0 ? 
      (<ul>
        {questions.map((question, i) => <li key={i}>{question.content}</li>)}
      </ul>)
      : (<p>no questions rn</p>)
      }
      {/* <QuestionList topic={topicId} questions={questions} />
      <button onClick={handleClickBack}>Back</button>
      <button onClick={handleClickNewQuestion}>Create new question</button> */}
    </main>
  );
};

export default ManageQuestions;
