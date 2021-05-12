import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseAmenities, IHouseAmenities } from './HouseAmenities';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseAmenities',
    component: HouseAmenities,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseAmenities> = (args: IHouseAmenities) => <HouseAmenities {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
