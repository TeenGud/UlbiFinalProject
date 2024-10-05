import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { title } from 'process';

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
    title: 'Title lorem ipsum',
    text: 'Hello geleg,pewmgpemgwegweg'
};

export const onlyTitle = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
Primary.args = {
    text: 'Hello geleg,pewmgpemgwegweg'
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Hello geleg,pewmgpemgwegweg'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({});
Primary.args = {
    text: 'Hello geleg,pewmgpemgwegweg'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({});
Primary.args = {
    title: 'Yo wassap everyone!',
    text: 'Hello geleg,pewmgpemgwegweg',
    theme: TextTheme.ERROR
};

export const ErrorDark = Template.bind({});
Primary.args = {
    title: 'Yo wassap everyone!',
    text: 'Hello geleg,pewmgpemgwegweg',
    theme: TextTheme.ERROR
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]