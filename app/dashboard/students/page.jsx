import Search from "@/ui/dashboard/search/search";
import Pagination from "@/ui/dashboard/pagination/pagination";
import styles from "@/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import { fetchStudents } from "../../../pages/api/test/data";
import { deleteStudent } from "actions/actions";

const StudentsPage = async ({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count,students} = await fetchStudents(q,page);

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
            <td>Resuming Date</td>
            <td>Course</td>
            <td>Phone</td>
            <td>Date admitted</td>
            <td>Email</td>
            <td>Exam</td>
            <td>Module</td>
            <td>Mode of study</td>
            <td>Level</td>
            <td>Accomodation</td>
            <td>covered</td>
            <td>uncovered</td>
          </tr>
        </thead>
        <tbody>
        {students.map(student=>(  
          <tr key={student.id}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                {student.name}
              </div>
            </td>
            <td>{student.admission}</td>
            <td>{student.createdAt?.toString().slice(4,16)}</td>
            <td>{student.course}</td>
            <td className={styles.hiddenContent}>{student.telephone}</td>
            <td className={styles.hiddenContent}>{student.admindate}</td> 
            <td className={styles.hiddenContent}>{student.email}</td>
            <td className={styles.hiddenContent}>{student.exam}</td>
            <td className={styles.hiddenContent}>{student.module}</td>
            <td className={styles.hiddenContent}>{student.modStudy}</td>
            <td className={styles.hiddenContent}>{student.level}</td>
            <td className={styles.hiddenContent}>{student.accommodation}</td>
            <td className={styles.hiddenContent}>{student.covered}</td>
            <td className={styles.hiddenContent}>{student.uncovered}</td>
            <td>
              <div className={styles.button}>
                <Link href={`/dashboard/students/${student.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteStudent}>
                  <input type="hidden" name="id" value={student.id} />
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </form>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default StudentsPage;