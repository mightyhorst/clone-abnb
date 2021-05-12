import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Review, IReview } from './Review';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/Review',
    component: Review,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IReview> = (args: IReview) => <Review {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
