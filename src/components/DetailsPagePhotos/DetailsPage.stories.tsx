import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DetailsPage, IDetailsPage } from './DetailsPage';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/DetailsPage',
    component: DetailsPage,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IDetailsPage> = (args: IDetailsPage) => <DetailsPage {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
