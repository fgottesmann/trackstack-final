import React from 'react';
import styles from './Backbutton.module.css';

export default function Backbutton(): JSX.Element {
  const goBack = () => {
    history.back();
  };
  return (
    <div>
      <a className={styles.backButton} onClick={goBack}>
        <img src="/backbutton.svg" />
      </a>
    </div>
  );
}
