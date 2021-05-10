import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Calendar, ICalendar } from './Calendar';

/**
 * @exports Story
 */
export default {
    title: 'DetailsPage/Calendar',
    component: Calendar,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<ICalendar> = (args: ICalendar) => <Calendar {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
