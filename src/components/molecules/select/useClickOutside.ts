import { RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLElement | null>, onClickOutside: () => void) => {
    useEffect(() => {
        const handleMouseDown = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClickOutside();
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        return () => document.removeEventListener('mousedown', handleMouseDown);
    }, [ref, onClickOutside]);
};
