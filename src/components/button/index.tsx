import type { FC } from 'react';
import { forwardRef } from 'react';
import { clsx } from 'clsx';

import type { ButtonProps } from './type';

import classes from './style.module.scss';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, onClick, isHover }, ref) => {
        const handleClick = () => {
            onClick?.();
        };

        return (
            <button
                ref={ref}
                className={clsx(classes.button, { [classes.buttonHover]: isHover }, className)}
                onClick={handleClick}
                type="button"
            >
                {children}
            </button>
        );
    },
);

export default Button;
