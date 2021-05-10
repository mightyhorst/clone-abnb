import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseBeds, IHouseBeds } from './HouseBeds';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseBeds',
    component: HouseBeds,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseBeds> = (args: IHouseBeds) => <HouseBeds {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
