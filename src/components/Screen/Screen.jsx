import React from 'react';
import { motion } from 'framer-motion';
import styles from './Screen.module.scss';

const Screen = () => {
  const variants = {
    hidden: { x: -375 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={styles.screen}
      initial="visible"
      animate="hidden"
      variants={variants}
      transition={{ delay: 1.5 }}>
      <motion.div
        className={styles.bigRadius}
        initial="visible"
        animate="hidden"
        variants={variants}
        transition={{ delay: 0.9 }}
      />
      <motion.div
        className={styles.mediumRadius}
        initial="visible"
        animate="hidden"
        variants={variants}
        transition={{ delay: 0.7 }}
      />
      <motion.div
        className={styles.smallRadius}
        initial="visible"
        animate="hidden"
        variants={variants}
        transition={{ delay: 0.5 }}
      />
      <motion.h1
        className={styles.title}
        initial="visible"
        animate="hidden"
        variants={variants}
        transition={{ delay: 1.1 }}>
        LiveMe
      </motion.h1>
      <motion.span
        className={styles.description}
        initial="visible"
        animate="hidden"
        variants={variants}
        transition={{ delay: 1.3 }}>
        social streaming
      </motion.span>
    </motion.div>
  );
};

export default Screen;
