const essayQuestionModel = {
  questionId: "",
  heading: "",
  sno: "",
  questionType: "essay",
  subquestions: [],
  answer: "",
  totalmarks: "",
};
const passageQuestionModel = {
  questionId: "",
  heading: "",
  sno: "",
  questionType: "passage",
  subquestions: [],
  answer: "",
  totalmarks: "",
};
const mcqQuestionModel = {
  question: "",
  questionType: "mcq",
  heading: "",
  answers: {
    a: "",
    b: "",
    c: "",
    d: "",
  },
  correctAnswer: "",
  totalmarks: "",
  sno: "",
};
const fillInTheBlankQuestion = {
  heading: "",
  questionType:"fillInTheBlank",
  question: "",
  options: [],
  correctAnswer: "",
  sno: "",
};
const imageGuessQuestionModel = {
  heading: "",
  questionType:"imageGuess",
  question: "",
  imageUrl: "",
  answers: {
    a: "",
    b: "",
    c: "",
    d: "",
  },
  correctAnswer: "",
  totalmarks: "",
  sno: "", 
};
