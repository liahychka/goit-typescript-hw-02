import { useEffect, useState } from "react";
import Cafe from "./components/Cafe/Cafe"

function App() {
  const [showList, setshowList] = useState(false);
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
  localStorage.setItem("feedbackValue", JSON.stringify(feedback));
}, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
        setshowList(true);
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePer = Math.round((feedback.good / totalFeedback) * 100);

    const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    setshowList(false);
  }

    return (
      <div>
          <h1>Sip Happens Café</h1>
          <p>Please leave your feedback about our service
          by selecting one of the options below.</p>
      <button type="button" onClick={() => { updateFeedback("good") }}>Good</button>
      <button type="button" onClick={() => { updateFeedback("neutral") }}>Neutral</button>
      <button type="button" onClick={() => { updateFeedback("bad") }}>Bad</button>
      {showList && <button type="button" onClick={resetFeedback}>Reset</button>}
      {!showList && <p>No feedback yet</p>}
        {showList && <section>
        <Cafe
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
            total={totalFeedback}
            positive={positivePer}
          updateFeedback={updateFeedback}
        />
      </section>}
    </div>
  );
};

export default App;
