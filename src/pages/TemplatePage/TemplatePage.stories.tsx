import React from 'react';

import { Story, Meta } from '@storybook/react';

import { TemplatePage, ITemplatePage } from './TemplatePage';

/**
 * @exports Story
 */
export default {
    title: 'TemplatePage/TemplatePage',
    component: TemplatePage,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ITemplatePage> = (args: ITemplatePage) => <TemplatePage {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
