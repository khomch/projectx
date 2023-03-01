import React from 'react';
import lazyLoadingTimeout from '../../AboutPage/ui/AboutPage.async';

export const MainPageAsync = React.lazy(
    () => lazyLoadingTimeout(import('./MainPage'), 1000),
);
