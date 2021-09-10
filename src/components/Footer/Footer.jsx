import React from 'react';
import styles from './Footer.module.scss';
import Home from '../../assets/icon/home.svg';
import Video from '../../assets/icon/play.svg';
import Camera from '../../assets/icon/camera.svg';
import News from '../../assets/icon/news.svg';
import Profile from '../../assets/icon/profile.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <div className={styles.home}>
          <img src={Home} alt="icons" width={18} height={18} />
          <span className={styles.text}>Live</span>
        </div>
      </Link>
      <div className={styles.home}>
        <img src={Video} alt="icons" width={18} height={18} />
        <span className={styles.text}>Videos</span>
      </div>
      <div className={styles.camera}>
        <img src={Camera} alt="icons" width={18} height={18} />
      </div>
      <div className={styles.home}>
        <img src={News} alt="icons" width={18} height={18} />
        <span className={styles.text}>Feed</span>
      </div>
      <div className={styles.home}>
        <img src={Profile} alt="icons" width={18} height={18} />
        <span className={styles.text}>Profile</span>
      </div>
    </footer>
  );
};

export default Footer;
