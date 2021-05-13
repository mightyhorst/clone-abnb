import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ExploreNearby, IExploreNearby } from './ExploreNearby';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/ExploreNearby',
    component: ExploreNearby,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IExploreNearby> = (args: IExploreNearby) => <ExploreNearby {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
