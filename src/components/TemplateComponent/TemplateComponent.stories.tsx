import React from 'react';

import { Story, Meta } from '@storybook/react';

import { TemplateComponent, ITemplateComponent } from './TemplateComponent';

/**
 * @exports Story
 */
export default {
    title: 'Category/TemplateComponent',
    component: TemplateComponent,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ITemplateComponent> = (args: ITemplateComponent) => <TemplateComponent {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
