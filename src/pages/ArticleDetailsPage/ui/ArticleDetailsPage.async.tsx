import React from 'react';
import lazyLoadingTimeout from '../../AboutPage/ui/AboutPage.async';

export const ArticleDetailsPageAsync = React.lazy(
    () => lazyLoadingTimeout(import('./ArticleDetailsPage'), 1000),
);
