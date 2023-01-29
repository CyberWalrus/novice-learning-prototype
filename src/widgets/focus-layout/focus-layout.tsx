import type { CSSProperties, FC } from 'react';
import { useEffect, useInsertionEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useFocusLayoutContext } from './context';
import type { FocusLayoutProps } from './types';
import { useHover } from './use-hover';

import classes from './focus-layout.module.scss';

const FocusLayout: FC<FocusLayoutProps> = () => {
    const $activeBox = useHover<HTMLDivElement>();
    const [style, setStyle] = useState<CSSProperties>();
    const { step, $element, handleChangeStep } = useFocusLayoutContext();

    const isHidden = step === 'start' || step === 'end';

    const handleClick = () => {
        $element?.current?.click();
    };

    const handleEnd = () => {
        handleChangeStep?.('end');
    };

    useEffect(() => {
        if ($element?.current) {
            setStyle({
                height: $element.current.offsetHeight,
                left: $element.current.offsetLeft,
                top: $element.current.offsetTop,
                width: $element.current.clientWidth,
            });
        }
    }, [$element, step]);

    useInsertionEffect(() => {
        if (isHidden) {
            return;
        }

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    if (isHidden) {
        return null;
    }

    return createPortal(
        <div className={classes.focusLayout}>
            <div className={classes.transparentBox} style={{ ...style }} />
            <div
                ref={$activeBox}
                className={classes.activeBox}
                onClick={handleClick}
                style={style}
            />
            <button className={classes.close} onClick={handleEnd} type="button">
                Close
            </button>
        </div>,
        document.body,
    );
};

export default FocusLayout;
