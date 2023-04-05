import { useState } from 'react';
import { Buttons } from './Buttons';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const onClick = e => {
    if (e.target.textContent === 'Good') {
      setGood(prevGood => prevGood + 1);
    } else if (e.target.textContent === 'Neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (e.target.textContent === 'Bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    let percent = total ? Math.ceil((good / total) * 100) : 0;
    return percent;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <Buttons onClick={onClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            countTotalFeedback={countTotalFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
