import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ThingsToKnow, IThingsToKnow } from './ThingsToKnow';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/ThingsToKnow',
    component: ThingsToKnow,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IThingsToKnow> = (args: IThingsToKnow) => <ThingsToKnow {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
