import React, { useState } from "react";
import Question from "./Question";
const QuestionsTable = ({ questions, loading }) => {
  const headers = [
    "ID",
    "Question text and tags",
    "last update",
    "Question type",
    "Last Updated",
    "# of tests",
    "More",
  ];
  return (
    <>
    {loading ? <h2 className="loading">Loading...</h2> : (
    <div className="questions-table">
      <table style={{ width: 1500 }}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        {questions.length > 0 ? (
          <tbody>
            {questions.map((question, i) => (
              <Question key={i} question={question} />
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td>There is no question available</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
    )}
    </>
  );
};

export default QuestionsTable;
