import React from 'react';
import lazyLoadingTimeout from '../../AboutPage/ui/AboutPage.async';

export const ProfilePageAsync = React.lazy(
    () => lazyLoadingTimeout(import('./ProfilePage'), 1000),
);
