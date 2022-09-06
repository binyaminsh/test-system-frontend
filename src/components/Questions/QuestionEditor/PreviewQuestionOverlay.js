import React from "react";
import styles from './PreviewQuestionOverlay.module.css'
const Backdrop = ({ previewBackHandler }) => {
  return (
    <div className={styles.backdrop} onClick={previewBackHandler}></div>
  )
}
const PreviewQuestionOverlay = ({ question, previewBackHandler }) => {
  return (
    <>
    <Backdrop previewBackHandler={previewBackHandler}/>
    <div className={styles.container}>
      <header className={styles.header}><h3>{question.content}</h3></header>
      <h5 className={styles.additional}>{question.lowerContent}</h5>
      <ol
        className={`${styles.answers} ${question.answersLayout === "horizontal" ? styles['answers-horizontal'] : '' }`}
      >
        {question.answers.map((answer) => (
          <li>{answer.content}</li>
        ))}
      </ol>
         <footer className={styles.footer}><button onClick={previewBackHandler}>Back</button></footer>   
    </div>
    </>
  );
};
// question.answersLayout === "vertical" ? "vertical" : "horizontal"
export default PreviewQuestionOverlay;
