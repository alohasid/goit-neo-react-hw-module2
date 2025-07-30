export default function Feedback({ feedback }) {
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {feedback.good + feedback.neutral + feedback.bad}</p>
            <p>Positive: {feedback.good > 0 ? ((feedback.good / (feedback.good + feedback.neutral + feedback.bad)) * 100).toFixed(0) : 0}%</p>
        </div>
    );
}