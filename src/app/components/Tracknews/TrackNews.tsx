import React from 'react';
import styles from './TrackNews.module.css';

function News(): JSX.Element {
  return (
    <div className={styles.news}>
      <article className={styles.newsOne}>
        The latest news about electronic dance music and beats can be found at
        <a href="https://www.youredm.com"> YOUREDM </a>
        and <a href="https://edm.com/news"> edm.com </a>
      </article>
      <article className={styles.newsTwo}>
        I've put together the ultimate playlist of the biggest beat drops in
        electronic dance music...
        <a
          href="https://www.bigtop40.com/playlists/biggest-edm-dance-music-drops/"
          className={styles.link}
        >
          Click here!
        </a>
      </article>
      <article className={styles.newsThree}>
        Here you can browse for
        <br />
        <a href="https://www.musicfestivalwizard.com/all-festivals/?festival_guide=germany&month=&festivalgenre=electronic&festivaltype=&festival_length=&festival_size=&camping=&artist=&company=&sdate=Jul+4%2C+2021&edate=Dec+31%2C+2022">
          Electronic Festivals
        </a>
        <br />
        in 2021/22
      </article>
      <p className={styles.videoHeader}>
        ...2021's finest choice - made by me{' '}
      </p>
    </div>
  );
}

export default News;
