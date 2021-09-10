import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.link}>
          &#5176;&ensp;Back
        </Link>
        <form className={styles.form}>
          <div className={styles.content}>
            <h1 className={styles.title}>Sign Up</h1>
            <p className={styles.desciption}>
              Please fill information to create an account and sign up to continue
            </p>
          </div>
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="password" placeholder="Password" />
          <input className={styles.input} type="text" placeholder="Enter Mobile Number" />
          <div className={styles.gender}>
            <span className={styles.genderName}>Gender</span>
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
          <Link to="/select-gender">
            <Button name="Sign Up" color="login" />
          </Link>
        </form>
      </div>

      <p className={styles.account}>
        Already have an account?
        <Link to="/login" className={styles.link}>
          &ensp;Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
