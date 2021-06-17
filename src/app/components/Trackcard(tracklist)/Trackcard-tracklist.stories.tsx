import React, { Props } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Cards from './Trackcard-tracklist';

export default {
  title: 'Component/Cards',
  component: Cards,
} as Meta;

const Template: Story<Props> = (args) => <Cards {...args} />;

export const Trackcard = Template.bind({});
Trackcard.args = {
  likebutton: true,
  title: 'Title',
  artist: 'Artist',
  image: '/malone1.jpg',
};
