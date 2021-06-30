import React from 'react';
import styles from './Trackcard-tracklist.module.css';
import Likebutton from '../Likebutton/Likebutton';

export type TrackcardProps = {
  title: string;
  artist: string;
  image: string;
};

function Trackcard({ title, artist, image }: TrackcardProps): JSX.Element {
  return (
    <div className={styles.trackcard}>
      <img className={styles.cardimage} src={image} />
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.artist}>{artist}</h4>
      <button className={styles.likebutton}>
        <Likebutton id={'id'} />
      </button>
    </div>
  );
}

export default Trackcard;
