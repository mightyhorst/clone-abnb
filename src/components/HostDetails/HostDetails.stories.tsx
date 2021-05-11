import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HostDetails, IHostDetails } from './HostDetails';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HostDetails',
    component: HostDetails,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHostDetails> = (args: IHostDetails) => <HostDetails {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
