export default function Options({ onFeedback }) {
    return (
        <div>
            <button onClick={() => onFeedback('good')}>Good</button>
            <button onClick={() => onFeedback('neutral')}>Neutral</button>
            <button onClick={() => onFeedback('bad')}>Bad</button>
            <button onClick={() => onFeedback('reset')}>Reset</button> {/* Note: Reset logic to be added separately */}
        </div>
    );
}