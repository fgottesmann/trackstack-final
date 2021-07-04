import React from 'react';
import styles from './Homepage.module.css';
import Trackcardhome from '../../components/Trackcard(homepage)/Trackcardhome';
import VideoPlayer from '../../components/Video/Video';
import News from '../../components/Tracknews/TrackNews';

export default function Homepage(): JSX.Element {
  return (
    <div className={styles.homepage}>
      <a href="http://localhost:3000/tracklist" className={styles.heading}>
        Stack
      </a>
      <div className={styles.trackcardhome}>
        <Trackcardhome />
      </div>
      <div className={styles.news}>
        <News />
      </div>
      <div className={styles.video}>
        <VideoPlayer />
      </div>
    </div>
  );
}
