import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { t } from 'i18next';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
        {t('page is not found')}
    </div>
));
