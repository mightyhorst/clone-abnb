import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PageHeader, IPageHeader } from './PageHeader';

/**
 * @exports Story
 */
export default {
    title: 'Layout/PageHeader',
    component: PageHeader,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IPageHeader> = (args: IPageHeader) => <PageHeader {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
