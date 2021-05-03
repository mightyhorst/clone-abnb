import React from 'react';

import { Story, Meta } from '@storybook/react';

import { SearchResults, ISearchResults } from './SearchResults';

/**
 * @exports Story
 */
export default {
    title: 'SearchPage/SearchResults',
    component: SearchResults,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ISearchResults> = (args: ISearchResults) => <SearchResults {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
