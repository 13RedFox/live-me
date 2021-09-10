import React from 'react';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';
// import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <h1>Home</h1>
      <Footer />
    </motion.div>
  );
};

export default HomeScreen;
