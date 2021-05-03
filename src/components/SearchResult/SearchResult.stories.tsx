import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SearchResult, ISearchResult } from './SearchResult';

/**
 * @exports Story
 */
export default {
    title: 'SearchPage/SearchResult',
    component: SearchResult,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ISearchResult> = (args: ISearchResult) => <SearchResult {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
