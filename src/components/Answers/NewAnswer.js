const NewAnswer = (props) => {
  return (
    <div key={props.answer.id}>
      <input
        type={"text"}
        required
        id={props.answer.id}
        value={props.answer.content}
        onChange={props.answerChangeHandler}
      />
      {props.questionType === "single" && (
        <label>
          <input
            name="isCorrect"
            id={props.answer.id}
            checked={props.answer.isCorrect}
            type={"radio"}
            onChange={props.answerChangeHandler}
          />
          {props.answer.isCorrect ? "correct" : "incorrect"}
        </label>
      )}
      {props.questionType === "multiple" && (
        <input
          type={"checkbox"}
          onChange={props.answerChangeHandler}
          id={props.answer.id}
          checked={props.answer.isCorrect}
        />
      )}
    </div>
  );
};

export default NewAnswer;
