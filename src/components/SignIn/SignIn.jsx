import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.link}>
          &#5176;&ensp;Back
        </Link>
        <form className={styles.form}>
          <div className={styles.content}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.desciption}>
              Enter your email address and password to access your account
            </p>
          </div>
          <input className={styles.input} type="email" placeholder="Email" />
          <input className={styles.input} type="password" placeholder="Password" />
          <a className={styles.forgot} href="#!">
            Forgot Password?
          </a>
          <Button name="Login" color="login" />
        </form>
      </div>

      <p className={styles.account}>
        Don’t have an account?
        <Link to="/sign-up" className={styles.link}>
          &ensp;Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
