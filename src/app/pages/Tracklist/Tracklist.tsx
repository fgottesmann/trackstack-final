import React from 'react';
import { useEffect, useState } from 'react';
import { Track } from '../../../types';
import Backbutton from '../../components/Backbutton/Backbutton';
import { Trackcard } from '../../components/Trackcard(tracklist)/Trackcard-tracklist.stories';
import styles from './Tracklist.module.css';

function Tracklist(): JSX.Element {
  const [tracks, setTracks] = useState<Track[]>();

  useEffect(() => {
    fetch('/api/tracks')
      .then((response) => response.json())
      .then(setTracks);
  }, []);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  const trackcards = tracks.map(
    ({ id, imgSrc, title, artist }: Track): JSX.Element => (
      <div className={styles.trackcard}>
        <Trackcard id={id} imgSrc={imgSrc} title={title} artist={artist} />
      </div>
    )
  );

  return (
    <>
      <div>
        <div className={styles.backbutton}>
          <Backbutton />
        </div>
        <div className={styles.pulseImg}>
          <img className={styles.topImg} src="/topImg.jpg" />
        </div>
      </div>
      <div className={styles.cardContainer}>{trackcards}</div>
    </>
  );
}

export default Tracklist;
