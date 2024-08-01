import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";


function App() {
  const [feedback, setFeedback] = useState(JSON.parse(localStorage.getItem("feedbackValue")) || {
  good: 0,
  neutral: 0,
  bad: 0,
});

useEffect(() => {
  localStorage.setItem("feedbackValue", JSON.stringify(feedback));
}, [feedback]);


  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePer = Math.round((feedback.good / totalFeedback) * 100);

    const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  return (
  <div>
    <Description />
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
    {totalFeedback > 0 ? ( 
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positivePer}
        updateFeedback={updateFeedback}
      />
    ) : (
      <Notification />
    )}
  </div>
);
};

export default App;
