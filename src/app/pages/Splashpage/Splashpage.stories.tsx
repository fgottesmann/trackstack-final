import React from 'react';
import Splashpage from './Splashpage';

export default {
  title: 'Pages/Splashpage',
  component: Splashpage,
  parameters: {
    layout: 'fullscreen',
  },
};
export const Default = (): JSX.Element => (
  <Splashpage imgSrc="/TrackStack-logo-main.svg" />
);
