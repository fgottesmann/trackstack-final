import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Cards, { TrackcardProps } from './Trackcard-tracklist';

export default {
  title: 'Component/Cards',
  component: Cards,
} as Meta;

const Template: Story<TrackcardProps> = (args) => <Cards {...args} />;

export const Trackcard = Template.bind({});
Trackcard.args = {
  title: 'Title',
  artist: 'Artist',
  image: '/malone1.jpg',
};
