import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DiscoverExperiences, IDiscoverExperiences } from './DiscoverExperiences';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/DiscoverExperiences',
    component: DiscoverExperiences,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IDiscoverExperiences> = (args: IDiscoverExperiences) => <DiscoverExperiences {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
