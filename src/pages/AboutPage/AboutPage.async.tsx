import React from 'react';

export default function lazyLoadingTimeout<T>(dynamicImport: Promise<T>, countMSec: number): Promise<T>{
  return new Promise((resolve)=>{
    setTimeout(()=>{resolve(dynamicImport)}, countMSec);
  })
};

export const AboutPageAsync = React.lazy(
  () => { return lazyLoadingTimeout(import('./AboutPage'), 1500)},
);
