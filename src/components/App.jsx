import { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Feedback/Statistics";
import Section from "./Feedback/Section";
import Notification from "./Feedback/Notification";


export class App extends Component {
    state = {
        good : 0,
        neutral: 0,
        bad: 0
    }

    // onGoodClick = () => {
    //     this.setState((prevState) => {
    //         return {
    //             good: prevState.good + 1
    //         }
    //     })
    // }

    // onNeutralClick = () => {
    //     this.setState((prevState) => {
    //         return {
    //             neuteral: prevState.neuteral + 1
    //         }
    //     })
    // }

    // onBadClick = () => {
    //     this.setState((prevState) => {
    //         return {
    //             bad: prevState.bad + 1
    //         }
    //     })
    // }

    onLeaveFeedback = (state) => {
        this.setState(prevState => ({
            [state]: prevState[state] + 1,
        }))
    }

    countTotalFeedback = () => {
        const total = this.state.good + this.state.bad + this.state.neutral;
        return total;
    }

    countPositiveFeedbackPercentage = (total) => {
        const positiveFeedbackPercentage = Math.round((this.state.good / total) * 100);
        return positiveFeedbackPercentage;
    }


    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        
        return (
            <Section title="Please leave feedback">
                
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
                
                
                {
                    (good || neutral || bad > 0) 
                        ? <Statistics
                            title="Statistics"
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}
                        />
                        : <Notification message="There is no feedback" />
                }
            
            </Section>
        );
    }
}