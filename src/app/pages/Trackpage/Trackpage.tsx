import React from 'react';
import Backbutton from '../../components/Backbutton/Backbutton';
import { Waveplayer } from '../../components/Waveplayer/Waveplayer';
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
      <div className={styles.backbutton}>
        <Backbutton />
      </div>
      <img className={styles.img} src={imgSrc} alt="" />
      <div title={title} className={styles.title}>
        {title}
      </div>
      <div title={artist} className={styles.artist}>
        {artist}
      </div>
      <div className={styles.waveplayer}>
        <Waveplayer />
      </div>
    </div>
  );
}
