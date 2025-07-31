import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';

export default function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    const handleFeedback = (type) => {
        if (type === 'reset') {
            setFeedback({ good: 0, neutral: 0, bad: 0 });
        } else {
            setFeedback((prevFeedback) => ({
                ...prevFeedback,
                [type]: prevFeedback[type] + 1,
            }));
        }
    };

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const total = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = total > 0 ? ((feedback.good / total) * 100).toFixed(0) : 0;

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <Description />
            <Options onFeedback={handleFeedback} feedbackCount={total} />
            {total > 0 ? (
                <Feedback
                    feedback={feedback}
                    total={total}
                    positivePercentage={positivePercentage}
                />
            ) : (
                <Notification message="No feedback given yet." />
            )}
        </div>
    );
}