import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.css';

function VideoPlayer(): JSX.Element {
  return (
    <div className={styles.videoPlayer}>
      <ReactPlayer
        width="23.3em"
        height="13em"
        controls
        url="/Visualizer-Trackstack.mp4"
      />
    </div>
  );
}

export default VideoPlayer;
