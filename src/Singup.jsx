import './App.css';
import React, { useRef } from 'react';

export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Handle form submission logic here
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Full Name"
          ref={nameRef}
          name="name"
        />
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          name="confirmPassword"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
