import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
};

export function Button({ onClick }) {
  return (
    <button
      className="btn waves-effect waves-light"
      onClick={onClick}
      type="button"
    >
      Узнать
    </button>
  );
}
