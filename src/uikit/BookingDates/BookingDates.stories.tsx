import React from 'react';

import { Story, Meta } from '@storybook/react';

import { BookingDates, IBookingDates } from './BookingDates';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/BookingDates',
    component: BookingDates,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IBookingDates> = (args: IBookingDates) => <BookingDates {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
