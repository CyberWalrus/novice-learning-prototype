import type { FC } from 'react';

import type { ButtonProps } from './type';

import classes from './style.module.scss';

const Button: FC<ButtonProps> = ({ children, onClick }) => {
    const handleClick = () => {
        onClick?.();
    };

    return (
        <button className={classes.button} onClick={handleClick} type="button">
            {children}
        </button>
    );
};

export default Button;
