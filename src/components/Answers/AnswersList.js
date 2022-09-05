import NewAnswer from "./NewAnswer";

const AnswersList = (props) => {
  const answerChangeHandler = (e) => {
    props.setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      if (e.target.type === "text") {
        updatedAnswers[e.target.id - 1].content = e.target.value;
      } else if (e.target.type === "radio") {
        updatedAnswers.forEach((answer) => {
          if (answer.id !== e.target.id) {
            answer.isCorrect = false;
          }
        });
        updatedAnswers[e.target.id - 1].isCorrect = e.target.checked;
      } else {
        updatedAnswers[e.target.id - 1].isCorrect = e.target.checked;
      }

      return updatedAnswers;
    });
  };

  
  return (
    <label>
      Possible answers:
      {props.answers.map((answer) => (
        <NewAnswer
          key={answer.id}
          answer={answer}
          answerChangeHandler={answerChangeHandler}
          questionType={props.questionType}
        />
      ))}
    </label>
  );
};

export default AnswersList;
