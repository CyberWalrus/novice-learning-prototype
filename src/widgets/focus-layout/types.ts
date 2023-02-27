import type { CSSProperties, ReactNode, RefObject } from 'react';

export type StepLearning = 'end' | 'start' | 1 | 2 | 3;

export interface FocusLayoutContextType<GRef extends HTMLElement = HTMLElement> {
    isHover: boolean;
    step: StepLearning;
    $element?: RefObject<GRef>;
    handleChangeHover?: (value: boolean) => void;
    handleChangeStep?: (value: StepLearning) => void;
    handleSetElement?: (value: GRef) => void;
}

export interface FocusLayoutProviderProps {
    children?: ReactNode | ReactNode[];
}

export interface FocusLayoutProps {
    style?: CSSProperties;
}

export type CustomHTMLElement = HTMLElement & {
    msRequestFullscreen: () => Promise<void>;
    webkitRequestFullscreen: () => Promise<void>;
};
