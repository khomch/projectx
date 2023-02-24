import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is title',
    text: 'And this is text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'This is title',
    text: 'And this is text',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'This is title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'And this is text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'This is title',
    text: 'And this is text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'This is title',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'And this is text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
