import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logo from '../../assets/img/logo.png';

import styles from './Profile.module.scss';
import GlobalSvgSelector from '../../assets/icon/GlobalSvgSelector';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Header />
      <h1 className={styles.title}>Profile</h1>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={logo} alt="Logo" className={styles.image} />
          <div className={styles.editPhoto}>
            <GlobalSvgSelector id="camera" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
