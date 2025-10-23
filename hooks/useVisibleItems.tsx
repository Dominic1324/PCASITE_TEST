import { useState, useEffect } from 'react';

export const useVisibleItems = () => {
    const [itemsVisible, setItemsVisible] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setItemsVisible(5);
            } else if (window.innerWidth >= 640) {
                setItemsVisible(3);
            } else {
                setItemsVisible(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return itemsVisible;
};