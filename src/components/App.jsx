import { useState } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = Object.keys({ good, neutral, bad });

    const handleFeedback = (e) => {
        console.log(e);
        const feedback = e;
        switch (feedback) {
            case 'good':
                setGood((prevState) => prevState + 1)
                break;
            case 'neutral':
                setNeutral((prevState) => prevState + 1)
                break;
            case 'bad':
                setBad((prevState) => prevState + 1)
                break;
            default:
                break;
        }
    };

    const countTotalFeedback = () => {
        const total = good + bad + neutral;
        return total;
    }

    const countPositiveFeedbackPercentage = (total) => {
        const positiveFeedbackPercentage = Math.round((good / total) * 100);
        return positiveFeedbackPercentage;
    }

    return (
        <Section title="Please leave feedback">
                
            <FeedbackOptions
                options={options}
                onLeaveFeedback={handleFeedback}
            />
                
            {
                (good || neutral || bad > 0)
                    ? <Statistics
                        title="Statistics"
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}
                    />
                    : <Notification message="There is no feedback" />
            }
            
        </Section>
    );
};