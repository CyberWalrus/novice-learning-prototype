import type { FC } from 'react';
import { Children, createContext, useContext, useMemo, useRef, useState } from 'react';

import type { FocusLayoutContextType, FocusLayoutProviderProps, StepLearning } from './types';

export const FocusLayoutContext = createContext<FocusLayoutContextType>({
    isHover: false,
    step: 'start',
});

export const useFocusLayoutContext = () => {
    const context = useContext(FocusLayoutContext);

    return context;
};

export const FocusLayoutProvider: FC<FocusLayoutProviderProps> = ({ children }) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [step, setStep] = useState<StepLearning>('start');
    const $element = useRef<HTMLElement | null>(null);

    const handleSetElement = <GElement extends HTMLElement>(value: GElement) => {
        $element.current = value;
    };

    const contextValue = useMemo(
        () => ({
            $element,
            handleChangeHover: setIsHover,
            handleChangeStep: setStep,
            handleSetElement,
            isHover,
            step,
        }),
        [step, isHover],
    );

    return (
        <FocusLayoutContext.Provider value={contextValue}>
            {Children.map(children, (item) => item)}
        </FocusLayoutContext.Provider>
    );
};
