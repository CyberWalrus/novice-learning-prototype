import { useEffect, useRef } from 'react';

import { Button } from '$components';
import { useFocusLayoutContext } from '$widgets';

import classes from './styles.module.scss';

const Home = () => {
    const { handleChangeStep, step, handleSetElement, isHover } = useFocusLayoutContext();

    const $firstStep = useRef<HTMLButtonElement>(null);
    const $secondStep = useRef<HTMLButtonElement>(null);
    const $thirdStep = useRef<HTMLButtonElement>(null);

    const isHoverFirst = isHover && step === 1;
    const isHoverSecond = isHover && step === 2;
    const isHoverThird = isHover && step === 3;

    const handleClickFirstStep = () => {
        handleChangeStep?.(2);
    };

    const handleClickSecondStep = () => {
        handleChangeStep?.(3);
    };

    const handleClickThirdStep = () => {
        handleChangeStep?.('end');
    };

    useEffect(() => {
        if (step === 1) {
            handleSetElement?.($firstStep.current as HTMLElement);

            return;
        }

        if (step === 2) {
            handleSetElement?.($secondStep.current as HTMLElement);

            return;
        }

        if (step === 3) {
            handleSetElement?.($thirdStep.current as HTMLElement);
        }
    }, [handleSetElement, step]);

    return (
        <div className={classes.home}>
            <Button
                ref={$firstStep}
                className={classes.button}
                isHover={isHoverFirst}
                onClick={handleClickFirstStep}
            >
                First Step
            </Button>
            <Button
                ref={$secondStep}
                className={classes.button}
                isHover={isHoverSecond}
                onClick={handleClickSecondStep}
            >
                Second Step
            </Button>
            <Button
                ref={$thirdStep}
                className={classes.button}
                isHover={isHoverThird}
                onClick={handleClickThirdStep}
            >
                End
            </Button>
        </div>
    );
};

export default Home;
