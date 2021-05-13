import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ImageProfile, IImageProfile } from './ImageProfile';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/ImageProfile',
    component: ImageProfile,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IImageProfile> = (args: IImageProfile) => <ImageProfile {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
