import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, optio. Error id illum inventore quam quaerat, nisi praesentium commodi quas placeat corporis? Magni exercitationem nostrum iusto. Omnis quibusdam pariatur hic?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, optio. Error id illum inventore quam quaerat, nisi praesentium commodi quas placeat corporis? Magni exercitationem nostrum iusto. Omnis quibusdam pariatur hic?',

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
