import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import classNames from 'classnames';

const Input = ({ type, value, onChange, placeholder }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className={classNames('input')}
  ></input>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text']),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;