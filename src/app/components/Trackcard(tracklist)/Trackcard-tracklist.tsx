import React from 'react';
import styles from './Trackcard-tracklist.module.css';
import Likebutton from '../Likebutton/Likebutton';
import { Link } from 'react-router-dom';

export type TrackcardProps = {
  id?: string;
  title?: string;
  artist?: string;
  imgSrc?: string;
  link?: string;
};

function Trackcard({ title, artist, imgSrc, id }: TrackcardProps): JSX.Element {
  return (
    <Link to={`/tracks/${id}`}>
      <div className={styles.trackcard}>
        <img className={styles.cardimage} src={imgSrc} />
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.artist}>{artist}</h4>
        <div className={styles.likebutton}>
          <Likebutton id={'id'} />
        </div>
      </div>
    </Link>
  );
}

export default Trackcard;
