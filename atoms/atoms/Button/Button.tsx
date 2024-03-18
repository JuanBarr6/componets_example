import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'
import classNames from 'classnames';


const Button = ({type,children,isBlock})=><button className={classNames("button",{
    [`type-${type}`]:type,
    'is-block':isBlock,
})}
>
    {children}
</button>

Button.prototype={
    children:PropTypes.node.isRequired,
    type:PropTypes.oneOf(['primary','secondary','tertiary']),
    isBlock:PropTypes.bool,
};

Button.defaultProps={
    type:'primary',
    isBlock:true,
};
export default Button;