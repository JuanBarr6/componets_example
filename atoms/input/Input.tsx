import React from 'react';
import './styles.css';
import classNames from 'classnames';

interface InputProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  isError?: boolean;
  isBlock?: boolean;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, isError = false, isBlock = false }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={classNames("input", {
      'is-error': isError,
      'is-block': isBlock,
    })}
  />
);

export default Input;
