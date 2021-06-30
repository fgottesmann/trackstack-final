import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Backbutton from '../../components/Backbutton/Backbutton';
import { Waveplayer } from '../../components/Waveplayer/Waveplayer';
import styles from './Trackpage.module.css';

export default function Trackpage(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Fetch track based on id
    console.log(id);
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.backbutton}>
        <Backbutton />
      </div>
      <img className={styles.img} src="/edgeimg.jpg" alt="" />
      <div className={styles.title}>EDGE</div>
      <div className={styles.artist}>Lucas Meyer</div>
      <div className={styles.waveplayer}>
        <Waveplayer />
      </div>
    </div>
  );
}
