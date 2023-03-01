import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/icon-main.svg';
import AboutIcon from 'shared/assets/icons/icon-about.svg';
import ProfileIcon from 'shared/assets/icons/icon-profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'link-main',

    },

    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'link-about',

    },

    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'link-profile',

    },
];
