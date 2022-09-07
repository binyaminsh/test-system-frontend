import React from "react";
import styles from "./QuestionEditor.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createQuestion } from "../../../services/questionsService";
import AnswersList from "../../Answers/AnswersList";
import { updatedQuestion } from "../../../services/questionsService";
import PreviewQuestionOverlay from "./PreviewQuestionOverlay";
const QuestionEditor = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [answers, setAnswers] = useState([
    { id: 1, content: "", isCorrect: true },
    { id: 2, content: "", isCorrect: false },
    { id: 3, content: "", isCorrect: false },
    { id: 4, content: "", isCorrect: false },
  ]);
  const [questionType, setQuestionType] = useState("single");
  const [newQuestion, setNewQuestion] = useState({
    topicId: state.selectedTopic._id,
    content: "",
    lowerContent: "",
    answers: answers,
    answersLayout: "horizontal",
    tags: [],
  });
  const [isPreview, setIsPreview] = useState(false);
  useEffect(() => {
    if (state.question) {
      setAnswers(state.question.answers);
      setQuestionType(state.question.type);
      setNewQuestion({
        content: state.question.content,
        answersLayout: state.question.answersLayout,
        lowerContent: state.question.lowerContent,
        tags: state.question.tags,
      });
    }
  }, []);
  const handleChange = (e) => {
    setNewQuestion((prevQuestion) => {
      const updatedQuestion = { ...prevQuestion };
      if (e.target.name === "tags") {
        updatedQuestion[e.target.name] = e.target.value.split(/[ ,]+/);
      } else {
        updatedQuestion[e.target.name] = e.target.value;
      }
      return updatedQuestion;
    });
  };
  const previewBackHandler = () => setIsPreview(false);
  const questionTypeChangeHandler = (e) => {
    setQuestionType(e.target.value);
    onQuestionTypeChange(e.target.value);
  };
  const onQuestionTypeChange = (type) => {
    if (type === "single") {
      setAnswers((prev) => {
        const updatedAnswers = [...prev];
        updatedAnswers.forEach((answer) => (answer.isCorrect = false));
        updatedAnswers[0].isCorrect = true;
        return updatedAnswers;
      });
    }
  };
  const questionsType = [
    { name: "Single answer", value: "single" },
    { name: "Multiple answers", value: "multiple" },
  ];
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (state.question) {
        response = await updatedQuestion(state.question._id, {
          ...newQuestion,
          type: questionType,
          answers: answers,
        });
      } else {
        response = await createQuestion({ ...newQuestion, type: questionType });
      }
      if (response)
        navigate("/manageQuestions", {
          state: { selectedTopic: state.selectedTopic },
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleBack = () => navigate(-1);
  const handleShow = () => setIsPreview(true);
  return (
    <>
      {isPreview && (
        <PreviewQuestionOverlay
          question={newQuestion}
          previewBackHandler={previewBackHandler}
        />
      )}
      <form onSubmit={submitHandler} className={styles["form-container"]}>
        <h4>Field: {state.selectedTopic.name}</h4>
        <div className={styles["text-area-container"]}>
          <label>
            Question type:
            <select name="type" onChange={questionTypeChangeHandler}>
              {questionsType.map((type, i) => (
                <option key={i} value={type.value}>
                  {type.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Question text:
            <textarea
              name="content"
              required
              value={newQuestion.content}
              onChange={handleChange}
              placeholder="type a question..."
            />
          </label>
          <label>
            Text below question:
            <textarea
              name="lowerContent"
              value={newQuestion.lowerContent}
              onChange={handleChange}
              placeholder="type something..."
            />
          </label>
        </div>
        <div>
          <AnswersList
            answers={answers}
            setAnswers={setAnswers}
            questionType={questionType}
          />
        </div>
        <div className={styles["answers-layout-container"]}>
          <label>
            Answers layout:
            <label>
              <input
                name="answersLayout"
                required
                checked={newQuestion.answersLayout === "vertical"}
                type="radio"
                onChange={handleChange}
                value={"vertical"}
                style={{ marginLeft: "0.5rem" }}
              />{" "}
              vertical
            </label>
            <label>
              <input
                name="answersLayout"
                required
                checked={newQuestion.answersLayout === "horizontal"}
                type="radio"
                onChange={handleChange}
                value={"horizontal"}
              />
              horizontal
            </label>
          </label>
        </div>
        <div className={styles["tags-container"]}>
          <label>
            Tags:
            <input
              name="tags"
              required
              value={newQuestion.tags}
              type={"text"}
              onChange={handleChange}
              placeholder="add tags..."
              style={{ marginLeft: "0.5rem" }}
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="submit">Save</button>
          <button type="button" onClick={handleShow}>
            Show
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionEditor;
