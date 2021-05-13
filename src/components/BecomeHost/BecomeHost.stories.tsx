import React from 'react';

import { Story, Meta } from '@storybook/react';

import { BecomeHost, IBecomeHost } from './BecomeHost';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/BecomeHost',
    component: BecomeHost,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IBecomeHost> = (args: IBecomeHost) => <BecomeHost {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
