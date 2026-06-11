
import '../../../styles/quiz.css';

export default function Question({ question, selectedAnswer, handleAnswerSelect }) {
  return (
    <div className="question-container">
      <h2 className="question-text">{question.questionText}</h2>
      <ul className="option-list">
        {question.options.map((option) => (
          <li key={option}>
            <label className={`option${selectedAnswer === option ? ' selected' : ''}`}>
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
