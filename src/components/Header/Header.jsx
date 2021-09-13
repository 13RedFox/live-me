import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Header.module.scss';
import GlobalSvgSelector from '../../assets/icon/GlobalSvgSelector';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Header = () => {
  const [date, setDate] = useState(new Date());

  let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

  setInterval(() => setDate(new Date()), 1000);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <GlobalSvgSelector className={styles.sota} id="sota" />
        <GlobalSvgSelector id="wi-fi" />
      </div>

      <span className={styles.time}>
        {hours}
        <motion.span
          className={styles.tik}
          variants={variants}
          initial="visible"
          animate="hidden"
          transition={{ ease: 'easeInOut', repeat: Infinity, duration: 1.1 }}>
          :
        </motion.span>
        {minutes}
      </span>
      <GlobalSvgSelector id="battery" />
    </header>
  );
};

export default Header;
