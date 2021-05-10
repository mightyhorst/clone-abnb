import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseAmmenities, IHouseAmmenities } from './HouseAmmenities';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseAmmenities',
    component: HouseAmmenities,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseAmmenities> = (args: IHouseAmmenities) => <HouseAmmenities {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
