import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Rating, IRating } from './Rating';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/Rating',
    component: Rating,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IRating> = (args: IRating) => <Rating {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
