import React, { Component } from 'react';
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
// import Notification from "components/Notification";
import Notification from 'components/Notification/Notification ';
import Box from 'components/Box';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
// 8888888888888888
  handleLeaveFeedback = (e) => {
    const option = e.target.dataset.label;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () =>
    `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;

  render() {
    const total = this.countTotalFeedback();
    const stats = [...Object.entries(this.state), ["Total", total], ["Positive feedback", this.countPositiveFeedbackPercentage()]];
    return (
      <Box
        p={5}
        bg="backgroundPrimary"
      >
        <Section title="Please leave feedback💹">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback = {this.handleLeaveFeedback}
          />
        </Section>
        <Section title="📊Statistics📈">
          {this.countTotalFeedback()
            ? <Statistics
              stats={stats}/>
            : <Notification message="There is no feedback" />
          }
        </Section>
      </Box>
    )
  };
};

export default App;


