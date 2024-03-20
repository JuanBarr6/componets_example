import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import classNames from 'classnames';

const Input = ({ label, ...props }) => (
  <div>
    <label>{label}</label>
    <input className={classNames('input', JSON.stringify(props))} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['primary','secondary','tertiary']),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;