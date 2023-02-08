import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={ classNames(cls.Navbar, {}, [ className ]) }>
      <div className={ cls.links }>
        <AppLink theme={ AppLinkTheme.SECONDARY } className={ cls.mainLink } to={ '/' }>Main</AppLink>
        <AppLink theme={ AppLinkTheme.SECONDARY } to={ '/about' }>About</AppLink>
      </div>
    </div>
  )
}

