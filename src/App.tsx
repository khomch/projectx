import React, { Suspense } from 'react';
import Counter from "./components/Counter";
import './index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';

const App = () => {
  return (
    <div className="app">
      <Link to={ '/' }>Main</Link>
      <br/>
      <Link to={ '/about' }>About</Link>
      <Suspense fallback={ <div>Loading...</div> }>
        <Routes>
          <Route path={ '/about' } element={ <AboutPageAsync/> }/>
          <Route path={ '/' } element={ <MainPageAsync/> }/>
        </Routes>
      </Suspense>
      <Counter/>
    </div>
  );
};

export default App;
