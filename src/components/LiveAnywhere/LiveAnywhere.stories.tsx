import React from 'react';

import { Story, Meta } from '@storybook/react';

import { LiveAnywhere, ILiveAnywhere } from './LiveAnywhere';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/LiveAnywhere',
    component: LiveAnywhere,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ILiveAnywhere> = (args: ILiveAnywhere) => <LiveAnywhere {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
