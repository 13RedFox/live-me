import React from 'react';
import Button from './components/Button/Button';
import welcomeBg from './assets/img/welcome.png';
import styles from './App.module.scss';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import SelectGender from './components/SelectGender/SelectGender';
import HomeScreen from './components/HomeScreen/HomeScreen';


const App = () => {


  return (
    <Switch>
      <Route path='/' exact>
        <div className={styles.app}>
          <img className={styles.img} src={welcomeBg} alt="bg" />
          <h1 className={styles.title}>LiveMe</h1>
          <span className={styles.desciption}>Social Streaming</span>
          <Link to='/login'>
            <Button name='Login' color='login' />
          </Link>
          <Link to='/sign-up'>
            <Button name='Sing up' color='signUp' />
          </Link>
        </div>
      </Route>
      <Route path='/login' >
        <SignIn />
      </Route>
      <Route path='/sign-up'>
        <SignUp />
      </Route>
      <Route path='/select-gender'>
        <SelectGender />
      </Route>
      <Route path='/home-screen'>
        <HomeScreen />
      </Route>

    </Switch>

  );
}

export default App;
