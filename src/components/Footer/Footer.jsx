import React from 'react';
import styles from './Footer.module.scss';
import Video from '../../assets/icon/play.svg';
import News from '../../assets/icon/news.svg';
import { NavLink } from 'react-router-dom';
import GlobalSvgSelector from '../../assets/icon/GlobalSvgSelector';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavLink to="/home-screen" activeClassName={styles.selected} className={styles.home}>
        <GlobalSvgSelector id="home" />
        <span className={styles.text}>Live</span>
      </NavLink>
      <div className={styles.home}>
        <img src={Video} alt="icons" width={18} height={18} />
        <span className={styles.text}>Videos</span>
      </div>
      <div className={styles.camera}>
        <GlobalSvgSelector id="camera" />
      </div>
      <NavLink to="/feed" activeClassName={styles.selected} className={styles.home}>
        <img src={News} alt="icons" width={18} height={18} />
        <span className={styles.text}>Feed</span>
      </NavLink>
      <NavLink to="/profile" activeClassName={styles.selected} className={styles.home}>
        <GlobalSvgSelector id="profile" />
        <span className={styles.text}>Profile</span>
      </NavLink>
    </footer>
  );
};

export default Footer;
