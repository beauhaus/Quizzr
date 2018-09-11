import React from "react";
import Styled from "styled-components";

//These are the LANDING PAGE NAV buttons
const StyledQBtns = Styled.div`
height: 60vh;
width: 80vw;
margin: 5vh 10vw;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2,1fr);
grid-gap: 8vw;
padding: 2vw;


button {
  background: #E49696;
  color: #ddd;
  font-size: 15px;
  box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.2);
  border: 1px solid maroon;
  &:hover {
    background: #cc7878;
  }
 }
 .default-quiz-1 {
  grid-column: 1;
  grid-row: 1;
 }
 
 default-quiz-2 {
  grid-column: 2;
  grid-row: 1;
 }

 #custom-quiz-create { 
  grid-column: 1/-1;
  grid-row: 2;
 }
`;

const QuizBtnContainer = props => {
  return (
    <StyledQBtns className="quiz-btn-container">
      <button className="default-quiz-1" onClick={props.defaultQ1}>
        Take Icons Quiz
      </button>
      <button className="default-quiz-2" onClick={props.defaultQ2}>
        Take Math Quiz
      </button>
      <button id="custom-quiz-create" onClick={props.customQ}>
        Create Custom Quiz
      </button>
    </StyledQBtns>
  );
};

export default QuizBtnContainer;