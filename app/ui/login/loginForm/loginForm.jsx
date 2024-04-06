"use client";
import { authenticate } from "../../../../actions/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use useFormState hook to handle form state and actions
  const [state, formAction] = useFormState(authenticate, undefined);

  // Handle login form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state to true when login process starts
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    try {
      // Attempt to authenticate user
      await authenticate(undefined, formValues);
      // If authentication is successful, you can redirect or perform other actions
    } catch (error) {
      // If authentication fails, set error state with the error message
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };
  

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">{loading ? "Please Wait...." : "LOGIN"}</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;
