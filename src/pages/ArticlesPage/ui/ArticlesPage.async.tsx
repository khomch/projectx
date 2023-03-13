import React from 'react';
import lazyLoadingTimeout from '../../AboutPage/ui/AboutPage.async';

export const ArticlesPageAsync = React.lazy(
    () => lazyLoadingTimeout(import('./ArticlesPage'), 1000),
);
