import { MutableRefObject, useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Custom-Hook
export function useOnScreen<T extends Element>(ref: MutableRefObject<T | null>, rootMargin: string = "0px"): boolean {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        const currentRef = ref.current;
        return () => {
            observer.unobserve(currentRef as Element);
        };
        // eslint-disable-next-line
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}