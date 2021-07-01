import React from 'react';
import { useEffect, useState } from 'react';
import { Track } from '../../../types';
import { Trackcard } from '../../components/Trackcard(tracklist)/Trackcard-tracklist.stories';

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
      <div>
        <Trackcard key={id} imgSrc={imgSrc} title={title} artist={artist} />
      </div>
    )
  );

  return (
    <>
      <div>{trackcards}</div>
    </>
  );
}

export default Tracklist;
