import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string
}
const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                { t('profile-page')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
