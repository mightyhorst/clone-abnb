import React from 'react';

import { Story, Meta } from '@storybook/react';

import { BookingForm, IBookingForm } from './BookingForm';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/BookingForm',
    component: BookingForm,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IBookingForm> = (args: IBookingForm) => <BookingForm {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
