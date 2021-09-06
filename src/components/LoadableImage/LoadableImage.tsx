import React, { useEffect, useRef, useState } from 'react'
import styles from './LoadableImage.module.css'
import { useOnScreen } from  '../../store/hooks'
import { ILoadableImageProps } from '../../interfaces'

export const LoadableImage: React.FC<ILoadableImageProps> = (props) => {

    const { src, alt = '', onLoad = () => {} } = props;
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(containerRef);

    useEffect(() => {
        if (!isVisible || isLoaded) {
            return;
        }
        if (imageRef.current) {
            imageRef.current.onload = () => {
                setIsLoaded(true);
                onLoad();
            };
        }
    }, [isVisible, onLoad, isLoaded]);

    const wrapperClass = [styles.container];
    if (isLoaded) {
        wrapperClass.push(styles.containerLoaded)
    }

    const imgClass = [styles.image];
    if (isLoaded) {
        imgClass.push(styles.imageLoaded)
    }

    return (
        <div ref={ containerRef } className={ wrapperClass.join(' ') }>
            { (isVisible || isLoaded) && (<img
                ref={ imageRef }
                className={ imgClass.join(' ') }
                src={ src }
                alt={ alt }
            />) }
        </div>
    )
};