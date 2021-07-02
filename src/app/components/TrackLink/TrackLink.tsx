import React from 'react';
import styles from './TrackLink.module.css';
import { Link } from 'react-router-dom';
import PlayIcon from '../icons/PlaybuttonIcon';

export type TrackLinkProps = {
  id?: string;
  imgSrc?: string;
};

function TrackLink({ id, imgSrc }: TrackLinkProps): JSX.Element {
  return (
    <Link
      to={`/tracks/${id}`}
      className={styles.link}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <PlayIcon />
    </Link>
  );
}

export default TrackLink;
