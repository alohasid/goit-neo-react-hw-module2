import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

export default function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    const handleFeedback = (type) => {
        if (type === 'reset') {
            setFeedback({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        } else {
            setFeedback((prevFeedback) => ({
                ...prevFeedback,
                [type]: prevFeedback[type] + 1,
            }));
        }
    };

    useEffect(() => {
        const savedFeedback = localStorage.getItem('feedback');
        if (savedFeedback) {
            setFeedback(JSON.parse(savedFeedback));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options onFeedback={handleFeedback} />
            {feedback.good + feedback.neutral + feedback.bad > 0 ? (<Feedback feedback={feedback} />) : ''}
        </div>
    );
}