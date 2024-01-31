import Search from "@/ui/dashboard/search/search";
import Pagination from "@/ui/dashboard/pagination/pagination";
import styles from "@/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a student.." />
        <Link href="/dashboard/students/add">
          <button className={styles.addButton}>New Student</button>
        </Link>
      </div>
      {/* <div className={styles.table}></div> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Admission</td>
            <td>Resume Date</td>
            <td>Course</td>
            <td>Phone</td>
            <td>Year of admmision</td>
            <td>Email</td>
            <td>Exam</td>
            <td>Module</td>
            <td>Mode of study</td>
            <td>Level</td>
            <td>Accomodation</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Pius khainja
              </div>
            </td>
            <td>43477</td>
            <td>1.22.2004</td>
            <td>ICT</td>
            <td className={styles.hiddenContent}>0741535521</td>
            <td className={styles.hiddenContent}>2022</td>
            <td className={styles.hiddenContent}>Non-resident</td>
            <td className={styles.hiddenContent}>KNEC</td>
            <td className={styles.hiddenContent}>3</td>
            <td className={styles.hiddenContent}>Full Time</td>
            <td className={styles.hiddenContent}>Diploma</td>
            <td className={styles.hiddenContent}>gabriel@gmail.com</td>
            <td>
              <div className={styles.button}>
                <Link href="/dashboard/students/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default UserPage;