import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ImageCarousel, IImageCarousel } from './ImageCarousel';

/**
 * @exports Story
 */
export default {
    title: 'SearchPage/ImageCarousel',
    component: ImageCarousel,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IImageCarousel> = (args: IImageCarousel) => <ImageCarousel {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
