import React  from 'react';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={ '/' }>Main</Link>
      <br/>
      <Link to={ '/about' }>About</Link>
      <br/>
      <button onClick={ toggleTheme }>change theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
