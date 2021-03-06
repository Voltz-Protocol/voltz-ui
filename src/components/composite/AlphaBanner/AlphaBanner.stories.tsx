import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AlphaBanner from './AlphaBanner';

export default {
  title: 'Composite/AlphaBanner',
  component: AlphaBanner,
  argTypes: {},
} as ComponentMeta<typeof AlphaBanner>;

const Template: ComponentStory<typeof AlphaBanner> = (args) => <AlphaBanner />;

export const Basic = Template.bind({});
Basic.args = {};
