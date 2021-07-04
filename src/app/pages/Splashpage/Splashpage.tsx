import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Splashpage.module.css';

function Splashpage(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/home');
    }, 2000);
  }, []);
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
