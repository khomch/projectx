import React  from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={ toggleTheme }>change theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
