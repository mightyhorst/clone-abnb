import React from 'react';

import { Story, Meta } from '@storybook/react';

import { HeroUnit, IHeroUnit } from './HeroUnit';

/**
 * @exports Story
 */
export default {
    title: 'HomePage/HeroUnit',
    component: HeroUnit,
    argTypes: {

    },
    args: {

    },
} as Meta;

/**
 * @constant Template
 */
const Template: Story<IHeroUnit> = (args: IHeroUnit) => <HeroUnit {...args} />;

/**
 * @example Example story
 */
export const Example = Template.bind({});
Example.args = {
}
