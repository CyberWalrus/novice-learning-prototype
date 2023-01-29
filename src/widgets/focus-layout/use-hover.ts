import { useEffect, useRef } from 'react';

import { useFocusLayoutContext } from './context';

export const useHover = <GElement extends HTMLElement>() => {
    const { handleChangeHover, step } = useFocusLayoutContext();
    const ref = useRef<GElement>(null);

    useEffect(() => {
        const handleMouseOver = () => handleChangeHover?.(true);
        const handleMouseOut = () => handleChangeHover?.(false);

        const node = ref.current;

        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);

            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [handleChangeHover, step]);

    return ref;
};
