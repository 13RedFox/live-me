import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import SelectGenderDate from './SelectGenderDate';
import { motion } from 'framer-motion';
import styles from './SelectGender.module.scss';

const SelectGender = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className={styles.selectGender}
      initial="hidden"
      animate="visible"
      variants={variants}>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.content}>
            <h1 className={styles.title}>Information</h1>
            <p className={styles.desciption}>Please fill Gender and age to moving further</p>
          </div>

          <div className={styles.gender}>
            <h2 className={styles.genderName}>Gender</h2>
            <div className={styles.genderToggle}>
              <div className={styles.genderRadio}>
                <label className={styles.genderLabel} htmlFor="male">
                  Male
                </label>
                <input
                  className={styles.radio}
                  type="radio"
                  id="male"
                  name="gender"
                  defaultChecked
                />
              </div>
              <div className={styles.genderRadio}>
                <label className={styles.genderLabel} htmlFor="female">
                  Female
                </label>
                <input className={styles.radio} type="radio" id="female" name="gender" />
              </div>
            </div>
          </div>

          <div className={styles.date}>
            <h2 className={styles.dateTitle}>Date of Birth</h2>
            <div className={styles.dateWrapper}>
              <SelectGenderDate />
              <SelectGenderDate />
              <SelectGenderDate />
            </div>
          </div>
          <Link to="/home-screen">
            <Button name="Submit" color="login" />
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default SelectGender;
