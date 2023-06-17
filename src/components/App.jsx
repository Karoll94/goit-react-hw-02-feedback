import React, { Component } from "react";
import Statistics from './Statistics/Statistics'
import Section from "./Section/Section";
import  FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from './Notification/Notification';


//Componente de clase que extiende del componente de React
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //Funciones de las estadisticas
  incrementGood = () =>{
    this.setState({good: this.state.good + 1})
  }

  incrementNeutral= () =>{
    this.setState({neutral: this.state.neutral + 1})
  }

  incrementBad= () =>{
    this.setState({bad: this.state.bad + 1})
  }

  countTotalFeedback = () =>{
    let totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage = () =>{
    let percentagePositiveFeedback=
    (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(percentagePositiveFeedback);
  }

  render() {
    return(
      <Section title={'Please Leave Feedback'}>
        <div>
          <FeedbackOptions options = {this.incrementGood} onLeaveFeedback = {'Good'} />
          <FeedbackOptions options = {this.incrementNeutral} onLeaveFeedback = {'Neutral'} />
          <FeedbackOptions options = {this.incrementBad} onLeaveFeedback = {'Bad'} />
        </div>

        {this.countTotalFeedback() > 0 ? 
        (<Statistics 
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
          total = {this.countTotalFeedback()}
          positivePercentage = {this.countPositiveFeedbackPercentage()}
        />)
        :
        (<Notification message = {'There is no feedback'}/>)}
      </Section>
    )

  }
};

