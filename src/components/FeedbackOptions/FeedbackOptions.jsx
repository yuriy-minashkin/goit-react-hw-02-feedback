import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div className={css.wrapper}>
      {options.map(option => (
          <button className={css.button} key={option} type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}