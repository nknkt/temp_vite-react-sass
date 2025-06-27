import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`button${className ? ` ${className}` : ''}`} {...props}>
    {children}
  </button>
);

export default Button;