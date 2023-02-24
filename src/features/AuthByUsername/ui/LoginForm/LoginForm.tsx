import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'entities/User/model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'shared/config/i18n/i18n';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);
    const {
        username, password, error, isLoading,
    } = loginForm;

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        () => {
            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, username, password],
    );

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('login-form')} theme={TextTheme.DEFAULT} />
            {error && <Text text={i18n.t('error-in-login-form')} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('enter-username')}
                onChange={onChangeUserName}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('enter-password')}
                onChange={onChangePassword}
                value={password}

            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('sign-in')}
            </Button>
        </div>
    );
});
