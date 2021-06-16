import React from 'react';
import styles from './Trackcard-tracklist.module.css';

export type Props = {
  likebutton: boolean;
  title: string;
  artist: string;
  image: string;
};

function Trackcard({ likebutton, title, artist, image }: Props) {
  return (
    <div className={styles.trackcard}>
      <img className={styles.cardimage} src={image} />
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.artist}>{artist}</h4>
      <button className={styles.likebutton}>{likebutton}</button>
    </div>
  );
}

export default Trackcard;
