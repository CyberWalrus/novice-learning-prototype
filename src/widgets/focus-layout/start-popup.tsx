import type { FC } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '$components';

import { useFocusLayoutContext } from './context';

import classes from './start-popup.module.scss';

const StartPopup: FC = () => {
    const { step, handleChangeStep } = useFocusLayoutContext();

    const isHidden = step !== 'start' && step !== 'end';

    const text = step === 'start' ? 'Start' : 'Retry';

    const handleClick = () => {
        handleChangeStep?.(1);
    };

    if (isHidden) {
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
