import { useState } from 'react';
import Box from 'components/Box';
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";

const INITIAL = {
  GOOD: 'Good',
  NEUTRAL: 'Neutral',
  BAD: 'Bad',
  TOTAL: 'Total',
  POSITIVE_FEEDBACK: 'Positive feedback',
};

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = (e) => {
    const option = e.target.dataset.label;
    switch (option) {
      case INITIAL.GOOD:
        setGood(prevState => prevState + 1);
        break;
      case INITIAL.NEUTRAL:
        setNeutral(prevState => prevState + 1);
        break;
      case INITIAL.BAD:
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, el) => acc + el, 0);
  };

  const countPositiveFeedbackPercentage = () =>
    `${Math.round(
      (good / countTotalFeedback()) * 100
    )}%`;

  const stats = [[INITIAL.GOOD, good], [INITIAL.NEUTRAL, neutral], [INITIAL.BAD, bad], [INITIAL.TOTAL, countTotalFeedback()], [INITIAL.POSITIVE_FEEDBACK, countPositiveFeedbackPercentage()]];

  return (
    <Box
      p={5}
      bg="backgroundPrimary"
    >
      <Section title="Please leave feedback💹">
        <FeedbackOptions
          options={[INITIAL.GOOD, INITIAL.NEUTRAL, INITIAL.BAD]}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="📊Statistics📈">
        {countTotalFeedback()
          ? <Statistics
            stats={stats} />
          : <Notification message="There is no feedback" />
        }
      </Section>
    </Box>
  );
};



