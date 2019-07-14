/**
 * Infinite scroll function
 */
import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const useInfiniteScroll = (callbackFunction) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(debounce(() => {
        callbackFunction();
    }), [isFetching]);

    function handleScroll() {
        if (!((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) || isFetching) return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
}

export default useInfiniteScroll;