"use client";
import { authenticate } from "../../../../actions/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { ClipLoader } from "react-spinners"; // Import the spinner component

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginComplete, setLoginComplete] = useState(false); // State to track if login is complete

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    try {
      await authenticate(undefined, formValues);
      setLoginComplete(true); // Set loginComplete to true when login is successful
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  // If login is complete, do not show the form or spinner
  if (loginComplete) {
    return null;
  }

  return (
    <div className={styles.loginContainer}>
      {loading ? (
        <div className={styles.spinnerContainer}>
          <ClipLoader color="#1fe0ba" loading={loading} size={100} />
        </div>
      ) : (
        <form onSubmit={handleLogin} className={styles.form}>
          <h1>Login</h1>
          <input type="text" placeholder="username" name="username" required />
          <input type="password" placeholder="password" name="password" required />
          <button type="submit">LOGIN</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
