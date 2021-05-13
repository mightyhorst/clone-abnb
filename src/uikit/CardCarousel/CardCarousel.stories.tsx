import React from 'react';

import { Story, Meta } from '@storybook/react';

import { CardCarousel, ICardCarousel } from './CardCarousel';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/CardCarousel',
    component: CardCarousel,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ICardCarousel> = (args: ICardCarousel) => <CardCarousel {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
