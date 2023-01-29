import type { FC } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '$components';

import { useFocusLayoutContext } from './context';

import classes from './start-popup.module.scss';

const StartPopup: FC = () => {
    const { step, handleChangeStep } = useFocusLayoutContext();
    const handleClick = () => {
        handleChangeStep?.(1);
    };
    if (step !== 'start') {
        return null;
    }

    return createPortal(
        <div className={classes.startPopup}>
            <Button onClick={handleClick}>Start</Button>
        </div>,
        document.body,
    );
};

export default StartPopup;
