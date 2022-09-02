import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
const Question = ({ question }) => {
  const id = question._id.slice(-3);
  return (
    <tr>
      <td style={{width: 1500}}>{id}</td>
      <td style={{width: 1500}}>{question.content}</td>
      <td style={{width: 1500}}>{question.tags}</td>
      <td style={{width: 1500}}>{question.type}</td>
      <td style={{width: 1500}}>{"date"}</td>
      <td style={{width: 1500}}>{question.tests.length}</td>
      <td style={{width: 1500}}><FaEdit /> <FaTrashAlt /> </td>
    </tr>
  )
}

export default Question