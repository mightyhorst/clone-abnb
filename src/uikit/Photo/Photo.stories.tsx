import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Photo, IPhoto } from './Photo';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/Photo',
    component: Photo,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IPhoto> = (args: IPhoto) => <Photo {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
