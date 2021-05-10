import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseStats, IHouseStats } from './HouseStats';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseStats',
    component: HouseStats,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseStats> = (args: IHouseStats) => <HouseStats {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
