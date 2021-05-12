import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ExploreOtherOptions, IExploreOtherOptions } from './ExploreOtherOptions';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/ExploreOtherOptions',
    component: ExploreOtherOptions,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IExploreOtherOptions> = (args: IExploreOtherOptions) => <ExploreOtherOptions {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
