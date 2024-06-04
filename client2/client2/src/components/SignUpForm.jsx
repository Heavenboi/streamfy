import React from 'react';

const SignUpForm = () => {
  return (
    <form>
      <label>Username:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <label>Confirm Password:</label>
      <input type="password" />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUpForm;