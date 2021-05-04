import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SearchItem, ISearchItem } from './SearchItem';

/**
 * @exports Story
 */
export default {
    title: 'SearchPage/SearchItem',
    component: SearchItem,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ISearchItem> = (args: ISearchItem) => <SearchItem {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
