import React, { useState, useRef, useEffect } from 'react';
import styles from './Waveplayer.module.css';

const Waveplayer = (): JSX.Element => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const intervalId = setInterval(() => {
      if (audioPlayer.current) {
        setCurrentTime(audioPlayer.current.currentTime);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [audioPlayer.current, isPlaying]);

  const loadedAudio = () => {
    if (audioPlayer.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
    }
  };

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };
  const togglePlayPause = () => {
    if (audioPlayer.current) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }
  };

  const changeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioPlayer.current) {
      audioPlayer.current.currentTime = +event.target.value;
      setCurrentTime(audioPlayer.current.currentTime);
    }
  };

  const backThirty = () => {
    //
  };

  const forwardThirty = () => {
    //
  };

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.wavePlayer}>
        <audio
          ref={audioPlayer}
          src="/tracks/:id"
          preload="metadata"
          onLoadedData={loadedAudio}
        />
        {/* current time */}
        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
        {/* progress bar */}

        <input
          className={styles.progressBar}
          defaultValue="0"
          value={currentTime}
          max={duration}
          type="range"
          onChange={changeRange}
        />

        {/* duration */}
        <div className={styles.duration}>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.forwardBackward} onClick={backThirty}>
          <img src="/backward.svg" />
        </button>
        <button className={styles.playPause} onClick={togglePlayPause}>
          <img src={isPlaying ? '/pausebutton.svg' : '/playbutton.svg'} />
        </button>
        <button className={styles.forwardBackward} onClick={forwardThirty}>
          <img src="/forward.svg" />
        </button>
      </div>
    </div>
  );
};

export { Waveplayer };
