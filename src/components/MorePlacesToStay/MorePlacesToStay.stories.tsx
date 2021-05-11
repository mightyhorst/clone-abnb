import React from 'react';

import { Story, Meta } from '@storybook/react';

import { MorePlacesToStay, IMorePlacesToStay } from './MorePlacesToStay';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/MorePlacesToStay',
    component: MorePlacesToStay,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IMorePlacesToStay> = (args: IMorePlacesToStay) => <MorePlacesToStay {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
