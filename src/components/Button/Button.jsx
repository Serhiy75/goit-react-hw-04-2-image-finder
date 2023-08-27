import PropTypes from 'prop-types';

export const Button = ({ handleClick }) => {
  return (
    <button type="button" className="Button" onClick={handleClick}>
      load more
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
