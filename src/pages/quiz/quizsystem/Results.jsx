

export default function Results({ score, totalQuestions }) {
  const successRate = Math.round((score / totalQuestions) * 100);

  return (
    <div className="results-container">
      <h2>Quiz-Ergebnis</h2>
      <p className="results-score">
        {score} von {totalQuestions} richtig
      </p>
      <p className="results-rate">Erfolgsquote: {successRate}%</p>
    </div>
  );
}
