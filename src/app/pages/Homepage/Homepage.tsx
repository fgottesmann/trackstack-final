import React from 'react';
import styles from './Homepage.module.css';
import Trackcardhome from '../../components/Trackcard(homepage)/Trackcardhome';

export default function Homepage(): JSX.Element {
  return (
    <div className={styles.trackcardhome}>
      <Trackcardhome />
    </div>
  );
}
