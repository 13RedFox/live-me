import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import logo from '../../assets/img/logo.png';

import styles from './Profile.module.scss';
import GlobalSvgSelector from '../../assets/icon/GlobalSvgSelector';

const Profile = () => {
  const statistics = [
    { value: 270, descr: 'Followers' },
    { value: 27, descr: 'Following' },
    { value: 2107, descr: 'Views' },
    { value: 1200, descr: 'Likes' },
  ];

  const navigations = [
    { name: 'Stream Schedule', icon: 'calendar' },
    { name: 'Edit Profile', icon: 'edit' },
    { name: 'Share', icon: 'share' },
    { name: 'Guardian', icon: 'security' },
    { name: 'Settings', icon: 'settings' },
  ];

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
        <div className={styles.infoWrapper}>
          <h2 className={styles.infoTitle}>John Doe</h2>
          <p className={styles.infoDescr}>Blogger, designer and Actor</p>
          <div className={styles.rating}>
            <button className={styles.btnLevel}>
              <GlobalSvgSelector id="star" />
              <span className={styles.level}>Level 7</span>
            </button>
            <button className={styles.btnLeadear}>
              <GlobalSvgSelector id="medal" />
              <span className={styles.leader}>Leaderboard</span>
            </button>
          </div>
        </div>
        <div className={styles.statisticWrapper}>
          {statistics.map((item) => (
            <div className={styles.card} key={item.value}>
              <div className={styles.number}>{item.value}</div>
              <div className={styles.text}>{item.descr}</div>
            </div>
          ))}
        </div>
        <div className={styles.navigation}>
          {navigations.map((item) => (
            <div className={styles.navigationLink}>
              <div className={styles.wrapperIcon}>
                <GlobalSvgSelector id={item.icon} />
              </div>
              <span className={styles.navigationDescr}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
