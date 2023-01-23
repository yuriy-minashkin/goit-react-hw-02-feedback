import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <ul className={css.list}>
      <li className={css.good}><img></img>Good: <span>{good}</span></li>
      <li className={css.neutral}>Neutral: <span>{neutral}</span></li>
      <li className={css.bad}>Bad: <span>{bad}</span></li>
      <li>Total: <span>{total}</span></li>
      <li>Positive feedback: <span>{positivePercentage}%</span></li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
