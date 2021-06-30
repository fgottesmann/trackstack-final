import React from 'react';
import styles from './Splashpage.module.css';

function Splashpage(): JSX.Element {
  return (
    <div className={styles.splash}>
      <main>
        <h1 className={styles.splash__heading}>TrackStack</h1>
        <img
          className={styles.splash__container_logo}
          src="/TrackStack-logo-main.svg"
          alt=""
        />
      </main>
    </div>
  );
}

export default Splashpage;
