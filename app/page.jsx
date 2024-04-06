import styles from "../app/ui/home/home.module.css";
import Link from "next/link";


const Homepage = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["blur-circle1"]}></div>
      <div className={styles["blur-circle2"]}></div>
      <div className={styles["landing-page"]}>
        <header>
          <div className={styles.container}>
          <a href="" className={`${styles.logo} ${styles.link}`}>ICS<b>Technical</b></a>
          </div>
        </header>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={["text-content"]}>
            <h1>Welcome! Behold, a Student Resume Tracking System.</h1>
  <p>Empower your educational institution with comprehensive student resume tracking. Our system provides real-time insights into student attendance, academic performance, and more.</p>
  <p>Effortlessly monitor the number of students who have resumed classes, track their progress, and ensure optimal engagement.</p>
              <Link href="/dashboard/students/add">
          <button className={styles.button}>Get Started</button>
        </Link>
            </div>
            <div className={styles.image}>
              <img className={styles["main-image"]} src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
