import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DetailsPagePhotos, IDetailsPagePhotos } from './DetailsPagePhotos';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/DetailsPagePhotos',
    component: DetailsPagePhotos,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IDetailsPagePhotos> = (args: IDetailsPagePhotos) => <DetailsPagePhotos {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
