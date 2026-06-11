
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import ScrollProgress from './ScrollProgress';
import About from '../pages/about';
import Sensoren from '../pages/Sensoren';
import Lernen from '../pages/Lernen';
import Kurse from '../pages/Kurse';
import NoPage from '../pages/NoPage';

import AI from '../pages/subpages/AI';
import Anomaly from '../pages/subpages/Anomaly';
import IOT from '../pages/subpages/IOT';

import QuizPage from '../pages/quiz/QuizPage';
import { quizzes } from '../pages/quiz/quizData';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/sensoren" element={<Sensoren />} />
        <Route path="/lernen" element={<Lernen />} />
        <Route path="/kurse" element={<Kurse />} />

        <Route path="/ai" element={<AI />} />
        <Route path="/anomaly" element={<Anomaly />} />
        <Route path="/iot" element={<IOT />} />

        <Route path="/quiz1" element={<QuizPage quiz={quizzes.iot} />} />
        <Route path="/quiz2" element={<QuizPage quiz={quizzes.ki} />} />
        <Route path="/quiz3" element={<QuizPage quiz={quizzes.anomaly} />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
