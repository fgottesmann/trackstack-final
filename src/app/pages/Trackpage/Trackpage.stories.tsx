import React from 'react';
import Trackpage from './Trackpage';

export default {
  title: 'Pages/Trackpage',
  parameters: {
    layout: 'fullscreen',
  },
};

export const TrackPage = (): JSX.Element => (
  <div>
    <Trackpage imgSrc="/edgeimg.jpg" title="EDGE" artist="Lucas Meyer" />
  </div>
);
