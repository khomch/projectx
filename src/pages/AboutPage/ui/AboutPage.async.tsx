import React from 'react';

function lazyLoadingTimeout<T>(dynamicImport: Promise<T>, countMSec: number): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(dynamicImport); }, countMSec);
    });
}

export default lazyLoadingTimeout;

export const AboutPageAsync = React.lazy(
    () => lazyLoadingTimeout(import('./AboutPage'), 1500),
);
