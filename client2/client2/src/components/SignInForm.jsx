import React from 'react';

const SignInForm = () => {
  return (
    <form>
      <label>Username:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <button>Sign In</button>
    </form>
  );
};

export default SignInForm;