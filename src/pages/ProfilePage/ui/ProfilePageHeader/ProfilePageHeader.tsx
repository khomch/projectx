import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(
        () => {
            dispatch(profileActions.setReadonly(false));
        },
        [dispatch],
    );
    const onCancelEdit = useCallback(
        () => {
            dispatch(profileActions.cancelEdit());
        },
        [dispatch],
    );
    const onSave = useCallback(
        () => {
            dispatch(updateProfileData());
        },
        [dispatch],
    );

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('title')} />
            {readonly
                ? (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        { t('edit') }
                    </Button>

                ) : (
                    <>
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            { t('cancel') }
                        </Button>
                        <Button
                            className={cls.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            { t('save') }
                        </Button>
                    </>
                )}
        </div>
    );
};
