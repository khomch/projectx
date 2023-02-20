import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={() => setIsOpen(true)}>!!!!!</button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    dsadasdasdsadasdfgja;ogj ajgls;ad j;j s dg;osajdg ;asgn;la ngla
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
