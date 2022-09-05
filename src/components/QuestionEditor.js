import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createQuestion } from "../services/questionsService";
import AnswersList from "./Answers/AnswersList";
import { updatedQuestion } from "../services/questionsService";
const QuestionEditor = () => {
  const navigate = useNavigate();
  // const { state: selectedTopic, state: question } = useLocation();
  const { state } = useLocation();
  // console.log(question)
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
  useEffect(() => {
    if(state.question) {
      setAnswers(state.question.answers)
      setQuestionType(state.question.type)
      setNewQuestion({
        content: state.question.content,
        answersLayout: state.question.answersLayout,
        lowerContent: state.question.lowerContent,
        tags: state.question.tags
      })
    }
  }, [])
  const handleChange = (e) => {
    setNewQuestion((prevQuestion) => {
      const updatedQuestion = { ...prevQuestion };
      if(e.target.name === 'tags') {
        updatedQuestion[e.target.name] = (e.target.value).split(/[ ,]+/)
      } else {
        updatedQuestion[e.target.name] = e.target.value;
      }
      return updatedQuestion;
    });
  };

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
      if(state.question) {
        response = await updatedQuestion(state.question._id, {...newQuestion, type: questionType, answers: answers});
      } else {
        response = await createQuestion({...newQuestion, type: questionType});
      }
      if(response) navigate('/manageQuestions', { state: {selectedTopic: state.selectedTopic} })
    } catch (error) {
      console.log(error.message)
    } 
  }
  const handleBack = () => navigate(-1);
  const handleShow = () =>
    //show page with form details without submit
    console.log(newQuestion);
  return (
    <>
      <form onSubmit={submitHandler} className="new-form">
        <label>Field: {state.selectedTopic.name}</label>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
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
        <div>
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
        <div>
          <label>
            Tags:
            <span>
              <input
                name="tags"
                required
                value={newQuestion.tags}
                type={"text"}
                onChange={handleChange}
                placeholder="add tags..."
              />
            </span>
          </label>
        </div>
        <button type="submit">Save</button>
        
      </form>
      <div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleShow}>Show</button>
      </div>
    </>
  );
};

export default QuestionEditor;
