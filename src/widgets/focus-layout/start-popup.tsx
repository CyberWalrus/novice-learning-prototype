import type { FC } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '$components';

import { useFocusLayoutContext } from './context';

import classes from './start-popup.module.scss';

const StartPopup: FC = () => {
    const { step, handleChangeStep } = useFocusLayoutContext();

    const text = step === 'start' ? 'Start' : 'Retry';

    const handleClick = () => {
        handleChangeStep?.(1);
    };
    if (step !== 'start' && step !== 'end') {
        return null;
    }

    return createPortal(
        <div className={classes.startPopup}>
            <Button onClick={handleClick}>{text}</Button>
        </div>,
        document.body,
    );
};

export default StartPopup;
