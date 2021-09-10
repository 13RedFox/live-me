import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './SelectGender.module.scss';

const SelectGender = () => {
  return (
    <div className={styles.selectGender}>
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
                <input className={styles.radio} type="radio" id="male" name="gender" checked />
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
              <select className={styles.dateForm} name="Month" id="">
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apl">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </select>

              <select className={styles.dateForm} name="Month" id="">
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apl">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </select>

              <select className={styles.dateForm} name="Month" id="">
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apl">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </select>
            </div>
          </div>
          <Link to="/home-screen">
            <Button name="Submit" color="login" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SelectGender;
