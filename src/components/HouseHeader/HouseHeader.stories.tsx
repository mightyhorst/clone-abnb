import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HouseHeader, IHouseHeader } from './HouseHeader';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/HouseHeader',
    component: HouseHeader,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHouseHeader> = (args: IHouseHeader) => <HouseHeader {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
