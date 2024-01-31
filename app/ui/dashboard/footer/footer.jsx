import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Gabriel.js</div>
      <div className={styles.text}>© All rights reserved ICS.</div>
    </div>
  );
};

export default Footer;