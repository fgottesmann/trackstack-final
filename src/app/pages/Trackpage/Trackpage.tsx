import React from 'react';
import styles from './Trackpage.module.css';

type Props = {
  imgSrc: string;
  title: string;
  artist: string;
};

export default function Trackpage({
  imgSrc,
  title,
  artist,
}: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <li className={styles.trackItem}>
        <img className={styles.img} src={imgSrc} alt="" />
        <div title={title} className={styles.title}>
          {title}
        </div>
        <div title={artist} className={styles.artist}>
          {artist}
        </div>
      </li>
    </div>
  );
}
