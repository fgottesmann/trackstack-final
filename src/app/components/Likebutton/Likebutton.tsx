import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Likebutton.module.css';

export type LikebuttonProps = {
  id: string;
};

function Likebutton({ id }: LikebuttonProps) {
  const [isLiked, setIsLiked] = useState(
    localStorage.getItem('favoriteSong') === id
  );

  useEffect(() => {
    if (typeof id !== 'string') {
      return;
    }
    if (isLiked) {
      localStorage.setItem('favoriteSong', id);
    }
    if (!isLiked) {
      localStorage.removeItem('favoriteSong');
    }
  }, [isLiked]);

  return (
    <button className={styles.btn} onClick={() => setIsLiked(!isLiked)}>
      <img src={!isLiked ? '/likebutton.svg' : '/likebuttonactive.svg'} />
    </button>
  );
}

export default Likebutton;
