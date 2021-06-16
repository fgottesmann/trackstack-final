import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Likebutton, { LikebuttonProps } from './Likebutton';

export default {
  title: 'Component/Likebutton',
  component: Likebutton,
} as Meta;

const Template: Story<LikebuttonProps> = (args) => <Likebutton {...args} />;

export const LikeMalone = Template.bind({});
LikeMalone.args = {
  id: 'PostMalone',
};

export const LikeLovell = Template.bind({});
LikeLovell.args = {
  id: 'NightLovell',
};
