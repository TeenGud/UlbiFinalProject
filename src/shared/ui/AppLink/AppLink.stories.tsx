import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';


export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Some Text",
    theme: AppLinkTheme.PRIMARY
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Some Text",
    theme: AppLinkTheme.SECONDARY
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: "Some Text",
    theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]