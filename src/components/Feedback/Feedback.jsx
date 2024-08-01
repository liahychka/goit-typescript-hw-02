const Feedback = ({ good, neutral, bad, total, positive, updateFeedback, totalFeedback, positivePer}) => {
    return (
        <div>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positive}%</li>     
        </ul>
        </div>
    );
}
    
export default Feedback;