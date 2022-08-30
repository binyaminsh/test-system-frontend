import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList';

const ManageQuestions = () => {
 const navigate = useNavigate();
 const handleClickBack = () => {
  navigate(-1);
 }
 const handleClickNewQuestion = () => {
     navigate('/questionEditor', { state: { topicName: 'topic name' } })
 }
  return (
    <main>
      {/* <TopicHeader />
      <Filter /> */}
      <QuestionList />
      <button onClick={handleClickBack}>Back</button>
      <button onClick={handleClickNewQuestion}>Create new question</button>
    </main>
  )
}

export default ManageQuestions