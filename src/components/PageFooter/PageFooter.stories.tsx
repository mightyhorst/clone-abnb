import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PageFooter, IPageFooter } from './PageFooter';

/**
 * @exports Story
 */
export default {
    title: 'Layout/PageFooter',
    component: PageFooter,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IPageFooter> = (args: IPageFooter) => <PageFooter {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
