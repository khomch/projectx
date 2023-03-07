import { classNames } from 'shared/lib/helpers/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/items';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const ItemList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                {ItemList}

                <div className={cls.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher short={collapsed} className={cls.lang} />
                </div>

                <Button
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cls.collapseBtn}
                    theme={ButtonTheme.BACKGROUND}
                    size={ButtonSize.L}
                    square
                >
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
        </div>
    );
});
