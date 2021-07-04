import React, { useState } from 'react';
import styles from './Loginpage.module.css';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import Button from '../../components/Button/Button';
import Backbutton from '../../components/Backbutton/Backbutton';
import { Link } from 'react-router-dom';

function RegisterForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`${email} submitted`);
  }

  return (
    <div className={styles.registerForm}>
      <header className={styles.registerForm__header}>
        {/* Backbutton and ProfilePictureIcon will be add when the component is build. */}
        {/* <BackButton /> */}
        {/* <ProfilePictureIcon className={styles.registerForm__icon} /> */}

        <img
          className={styles.registerForm__logo}
          src="./TrackStack-logo-alt.svg"
          alt=""
        />
      </header>
      <main className={styles.registerForm__main}>
        <form className={styles.registerForm__form} onSubmit={handleSubmit}>
          <div className={styles.backbutton}>
            <Backbutton />
          </div>
          <LabeledInput
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />

          <LabeledInput
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
          />
        </form>
      </main>
      <Link to="/home">
        <Button> Register</Button>
      </Link>
    </div>
  );
}

export default RegisterForm;
