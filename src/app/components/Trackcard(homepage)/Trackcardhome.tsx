import React from 'react';
import { useEffect, useState } from 'react';
import { Track } from '../../../types';
import TrackLink from '../TrackLink/TrackLink';
import styles from './Trackcardhome.module.css';

function Trackcardhome(): JSX.Element {
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
    ({ id, imgSrc }: Track): JSX.Element => (
      <TrackLink id={id} imgSrc={imgSrc} />
    )
  );

  return (
    <>
      <div className={styles.trackLinks}>{trackcards}</div>
    </>
  );
}

export default Trackcardhome;
