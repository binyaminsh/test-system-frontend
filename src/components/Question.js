import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Question = ({ question}) => {
  const updateDate = new Date(question.updatedAt).toLocaleDateString();
  
  return (
    <tr>
      <td style={{width: 1500}}>{question.id}</td>
      <td style={{width: 1500}}>{question.content}</td>
      <td style={{width: 1500}}>{question.tags.join(', ')}</td>
      <td style={{width: 1500}}>{question.type}</td>
      <td style={{width: 1500}}>{updateDate}</td>
      <td style={{width: 1500}}>{question.tests.length}</td>
      <td style={{width: 1500}}><Link to={"create"} state={{question: question, selectedTopic: question.topicId}}><FaEdit /></Link> <Link to={"delete"}><FaTrashAlt /></Link></td>
    </tr>
  )
}

export default Question