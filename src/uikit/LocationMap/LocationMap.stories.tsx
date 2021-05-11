import React from 'react';

import { Story, Meta } from '@storybook/react';

import { LocationMap, ILocationMap } from './LocationMap';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/LocationMap',
    component: LocationMap,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ILocationMap> = (args: ILocationMap) => <LocationMap {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
