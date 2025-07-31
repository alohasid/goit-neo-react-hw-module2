export default function Options({ onFeedback, feedbackCount }) {
    return (
        <div>
            <button onClick={() => onFeedback('good')}>Good</button>
            <button onClick={() => onFeedback('neutral')}>Neutral</button>
            <button onClick={() => onFeedback('bad')}>Bad</button>
            {feedbackCount > 0 && (
                <button onClick={() => onFeedback('reset')}>Reset</button>
            )}
        </div>
    );
}