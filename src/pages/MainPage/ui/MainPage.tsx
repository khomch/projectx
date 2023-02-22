import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            <BugButton />
            { t('main-page') }
            <Input
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
