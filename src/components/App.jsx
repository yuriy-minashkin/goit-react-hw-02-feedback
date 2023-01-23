import React, { Component } from 'react'
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  
  onHandleClick = event => {
    const stateKey = event.target.name;
    this.setState(prevState => {
      return {
        [stateKey]: prevState[stateKey] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((totalValue, value) => totalValue + value, 0);
  };
  
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() ? Math.round(this.state.good / this.countTotalFeedback() * 100) : '0';
  }
  
  render() {
    const buttonKeysArr = Object.keys(this.state);
    
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonKeysArr}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"/>) :
          (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />)
          }
        </Section>
      </div>
    );
  }
}