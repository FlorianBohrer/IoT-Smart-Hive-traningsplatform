import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Question from './quizsystem/Question';
import Results from './quizsystem/Results';
import '../../styles/quiz.css';
import '../../styles/button.css';

/**
 * Gemeinsame Quiz-Seite für alle Kurse.
 * Behebt die Fehler der alten Quiz1–3-Komponenten:
 * - Auswertung wird nach der letzten Frage tatsächlich ausgelöst
 * - "Weiter" erst möglich, wenn eine Antwort gewählt wurde
 * - Fortschrittsanzeige
 */
export default function QuizPage({ quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const { title, questions } = quiz;
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex];
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const handleAnswerSelect = (answer) => {
    setAnswers((prev) => ({ ...prev, [currentIndex]: answer }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setCompleted(true);
    } else {
      setCurrentIndex((index) => index + 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setCompleted(false);
  };

  const score = questions.reduce(
    (sum, question, index) => (answers[index] === question.correctAnswer ? sum + 1 : sum),
    0
  );

  return (
    <motion.div
      key={quiz.id}
      className="quiz-card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="quiz-headline">{title}</h1>

      {!completed ? (
        <>
          <p className="quiz-progress">
            Frage {currentIndex + 1} von {totalQuestions}
          </p>
          <div className="quiz-progress-bar">
            <span style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }} />
          </div>

          <Question
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            handleAnswerSelect={handleAnswerSelect}
          />

          <button
            type="button"
            className="fuller-button yellow"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {isLastQuestion ? 'Auswerten' : 'Nächste Frage'}
          </button>
        </>
      ) : (
        <>
          <Results score={score} totalQuestions={totalQuestions} />
          <div className="quiz-actions">
            <button type="button" className="fuller-button yellow" onClick={handleRestart}>
              Nochmal versuchen
            </button>
            <Link to="/kurse" className="fuller-button quiet">
              Zurück zur Kursseite
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
}
