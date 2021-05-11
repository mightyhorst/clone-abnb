import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PlaceToStay, IPlaceToStay } from './PlaceToStay';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/PlaceToStay',
    component: PlaceToStay,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IPlaceToStay> = (args: IPlaceToStay) => <PlaceToStay {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
