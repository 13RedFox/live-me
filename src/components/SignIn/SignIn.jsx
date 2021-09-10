import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log(errors);
    history.push('/home-screen');
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div className={styles.signIn} initial="hidden" animate="visible" variants={variants}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.link}>
          &#5176;&ensp;Back
        </Link>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.content}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.desciption}>
              Enter your email address and password to access your account
            </p>
          </div>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            {...register('Email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            {...register('Password', { required: true, minLength: 6 })}
          />
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
    </motion.div>
  );
};

export default SignIn;
