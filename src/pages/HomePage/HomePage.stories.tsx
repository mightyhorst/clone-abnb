import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HomePage, IHomePage } from './HomePage';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/HomePage',
    component: HomePage,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHomePage> = (args: IHomePage) => <HomePage {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
