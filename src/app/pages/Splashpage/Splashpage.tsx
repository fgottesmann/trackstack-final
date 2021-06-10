import React from 'react';
import styles from './Splashpage.module.css';

type SplashpageProps = {
  imgSrc: string;
};

function Splashpage({ imgSrc }: SplashpageProps): JSX.Element {
  return (
    <div className={styles.splash}>
      <main>
        <h1 className={styles.splash__heading}>TrackStack</h1>
        <img className={styles.splash__logo} src={imgSrc} alt="" />
      </main>
    </div>
  );
}

export default Splashpage;
