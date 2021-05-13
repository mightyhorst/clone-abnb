import React from 'react';

import { Story, Meta } from '@storybook/react';

import { CardSimple, ICardSimple } from './CardSimple';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/CardSimple',
    component: CardSimple,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ICardSimple> = (args: ICardSimple) => <CardSimple {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
