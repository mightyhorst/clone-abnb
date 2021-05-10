import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DetailsPageHeader, IDetailsPageHeader } from './DetailsPageHeader';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/DetailsPageHeader',
    component: DetailsPageHeader,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IDetailsPageHeader> = (args: IDetailsPageHeader) => <DetailsPageHeader {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
