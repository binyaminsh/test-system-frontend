import React from 'react'

const Question = ({ question }) => {
  return (
    <tr key={question._id}>
      {Object.values(question).map((val) => (<td>{val}</td>))}
    </tr>
  )
}

export default Question