import React from 'react';
import styles from './Backbutton.module.css';

export default function Backbutton(): JSX.Element {
  const goBack = () => {
    history.back();
  };
  return (
    <div>
      <a className={styles.btnBtn2} onClick={goBack}>
        <img src="src/app/assets/backbutton.svg" alt="" />
      </a>
    </div>
  );
}
