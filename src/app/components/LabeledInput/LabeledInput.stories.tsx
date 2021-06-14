import React from 'react';
import LabeledInput from './LabeledInput';

export default {
  title: 'Component/LabeledInput',
  component: LabeledInput,
};

export const FirstName = (): JSX.Element => (
  <LabeledInput
    label="First Name"
    placeholder="first name"
    value=""
    onChange={console.log}
  />
);

export const LastName = (): JSX.Element => (
  <LabeledInput
    label="Last Name"
    placeholder="last name"
    value=""
    onChange={console.log}
  />
);

export const email = (): JSX.Element => (
  <LabeledInput
    label="email"
    placeholder="email"
    value=""
    onChange={console.log}
  />
);

export const password = (): JSX.Element => (
  <LabeledInput
    label="Password"
    placeholder="Password"
    value=""
    onChange={console.log}
  />
);

export const CornfirmPassword = (): JSX.Element => (
  <LabeledInput
    label="Confirm Password"
    placeholder="password again"
    value=""
    onChange={console.log}
  />
);
