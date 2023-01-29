import type { ReactNode } from 'react';

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    isHover?: boolean;
    onClick?: () => void;
}
