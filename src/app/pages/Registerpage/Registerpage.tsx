import React, { useState } from 'react';
import styles from './Registerpage.module.css';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import Button from '../../components/Button/Button';

function RegisterForm(): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`${firstName} submitted`);
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
          <LabeledInput
            label="First Name"
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={setFirstName}
            required
          />
          <LabeledInput
            label="Last Name"
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={setLastName}
            required
          />
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

          <LabeledInput
            label="Confirm Password"
            placeholder="Password again"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required
          />
        </form>
      </main>
      <Button>Register</Button>
      <a href="http://localhost:3000/login" className={styles.registerLink}>
        Already have an account?
      </a>
    </div>
  );
}

export default RegisterForm;
