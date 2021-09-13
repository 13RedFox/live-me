import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import styles from './SignUp.module.scss';
import Header from '../Header/Header';

const SignUp = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (date) => {
    console.log(JSON.stringify(date));
    console.log(errors);
    history.push('/select-gender');
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div className={styles.signUp} initial="hidden" animate="visible" variants={variants}>
      <div className={styles.wrapper}>
        <Header />
        <Link to="/" className={styles.link}>
          &#5176;&ensp;Back
        </Link>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.content}>
            <h1 className={styles.title}>Sign Up</h1>
            <p className={styles.desciption}>
              Please fill information to create an account and sign up to continue
            </p>
          </div>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            {...register('Email', {
              require: true,
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
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Mobile Number"
            {...register('Number', { required: true, minLength: 6 })}
          />
          <div className={styles.gender}>
            <span className={styles.genderName}>Gender</span>
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
                  {...register('Gender', { required: true })}
                />
              </div>
              <div className={styles.genderRadio}>
                <label className={styles.genderLabel} htmlFor="female">
                  Female
                </label>
                <input
                  className={styles.radio}
                  type="radio"
                  id="female"
                  name="gender"
                  {...register('Gender', { required: true })}
                />
              </div>
            </div>
          </div>
          <Button name="Sign Up" color="login" />
        </form>
      </div>

      <p className={styles.account}>
        Already have an account?
        <Link to="/login" className={styles.link}>
          &ensp;Login
        </Link>
      </p>
    </motion.div>
  );
};

export default SignUp;
