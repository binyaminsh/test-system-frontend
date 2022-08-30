import React, { useState } from "react";

const QuestionList = () => {
    const topicName = "replace with topic name"
    const [questions, setQuestions] = useState([]);
  return (
    <div>
      <div>
        <h3>Available Questions For {topicName}</h3>
      </div>
      <div class="grid-container">
        <div className="item1 : item ">ID</div>
        <div className="item2 : item ">Question text and tags</div>
        <div className="item3 : item ">last update</div>
        <div className="item4 : item ">Question type</div>
        <div className="item5 : item ">Last Updated</div>
        <div className="item6 : item "># of tests</div>
      </div>
      {questions.length < 1 ? <p>There is no question available</p> : null}
      <p className="p">showing "*" of "*" available Test</p>
    </div>
  );
};

export default QuestionList;
