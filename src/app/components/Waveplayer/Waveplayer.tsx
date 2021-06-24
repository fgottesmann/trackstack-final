import React, { useState, useRef, useEffect } from 'react';
import styles from './Waveplayer.module.css';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

const Waveplayer = (): JSX.Element => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);
  const animationRef = useRef<number | null>(null);

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
    if (audioPlayer.current && progressBar.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds.toString();
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
        animationRef.current = requestAnimationFrame(whilePlaying);
      } else if (animationRef.current) {
        audioPlayer.current.pause();
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime.toString();
      changePlayerCurrentTime();
    }
  };

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current)
      audioPlayer.current.currentTime = +progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current) {
      progressBar.current.style.setProperty(
        '--seek-before.width',
        `${(+progressBar.current.value / duration) * 100} %`
      );
      setCurrentTime(+progressBar.current.value);
    }
  };

  const backThirty = () => {
    if (progressBar.current) {
      progressBar.current.value = String(+progressBar.current.value - 30);
    }
  };

  const forwardThirty = () => {
    if (progressBar.current) {
      progressBar.current.value = String(progressBar.current.value + 30);
    }
  };

  return (
    <div className={styles.waveplayer}>
      <audio
        ref={audioPlayer}
        src="src/app/assets/LilPeep_Star_Shopping.mp3"
        preload="metadata"
        onLoadedData={loadedAudio}
      />
      <button className={styles.forwardBackward} onClick={backThirty}>
        <BsArrowLeftShort /> 30
      </button>
      <button className={styles.playPause} onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward} onClick={forwardThirty}>
        <BsArrowRightShort /> 30
      </button>

      {/* current time */}
      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div>
        <input
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          type="range"
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div className={styles.duration}>
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export { Waveplayer };
