import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PageAlert, IPageAlert } from './PageAlert';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/PageAlert',
    component: PageAlert,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IPageAlert> = (args: IPageAlert) => <PageAlert {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
