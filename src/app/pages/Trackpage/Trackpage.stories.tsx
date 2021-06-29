import React from 'react';
import Trackpage from './Trackpage';

export default {
  title: 'Pages/Trackpage',
  parameter: {
    layout: 'fullscreen',
  },
};

export const TrackPage = (): JSX.Element => (
  <Trackpage imgSrc="imgSrc" title="title" artist="artist" />
);
