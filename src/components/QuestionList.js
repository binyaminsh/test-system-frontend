import React, { useState } from "react";
import Question from './Question';
const QuestionList = ({ topic, questions }) => {
    const topicName = topic
    const headers = ['ID', 'Question text and tags', 'last update', 'Question type', 'Last Updated', '# of tests', 'More']
  return (
    <div>
      <div>
        <h3>Available Questions For {topicName}</h3>
      </div>
      <table style={{ width: 1500 }}>
        <thead>
          <tr>
          {headers.map((header, i) => <th key={i}>{header}</th>)}
          </tr>
        </thead>
        {questions.length > 0 
        ? (<tbody>{questions.map((question) => <Question question={question} />)}</tbody>) 
        : <p>There is no question available</p>}
      </table>
    </div>
  );
};

export default QuestionList;
