import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Video.module.css';

function VideoPlayer(): JSX.Element {
  return (
    <div className={styles.videoPlayer}>
      <ReactPlayer
        width="23.4em"
        height="13em"
        controls
        url="https://www.youtube.com/watch?v=brUoG-SVrWws://www.youtube.com/watch?v=brUoG-SVrWw"
      />
    </div>
  );
}

export default VideoPlayer;
