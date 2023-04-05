import css from './Statistics.module.css';

export function Statistics({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  countTotalFeedback,
}) {
  return (
    <>
      <ul>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {countTotalFeedback()}</li>
        <li className={css.item}>
          Positive feedback: {countPositiveFeedbackPercentage()}%
        </li>
      </ul>
    </>
  );
}
