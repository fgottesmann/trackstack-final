import React from 'react';
import { useParams } from 'react-router-dom';
import Backbutton from '../../components/Backbutton/Backbutton';
import { Waveplayer } from '../../components/Waveplayer/Waveplayer';
import styles from './Trackpage.module.css';
import { Track } from '../../../types';
import useFetch from '../../hooks/useFetch';

export default function Trackpage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const { data: track, isLoading } = useFetch<Track>(`/api/tracks/${id}`);

  if (!track || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.backbutton}>
        <Backbutton />
      </div>
      <img className={styles.img} src={track.imgSrc} alt="" />
      <div className={styles.title}>{track.title}</div>
      <div className={styles.artist}>{track.artist}</div>
      <div className={styles.waveplayer}>
        <Waveplayer />
      </div>
    </div>
  );
}
