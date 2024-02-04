import styles from "@/ui/dashboard/users/singleUser/singleUser.module.css";
import { fetchStudent } from "../../../../pages/api/test/data";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const student = await fetchStudent(id);

  return (
    <div className={styles.container}>
      {/* <div className={styles.infoContainer}>
    <div className={styles.imgContainer}>
      <Image src="/noavatar.png" alt="" fill />
    </div>
    {student.name}
  </div> */}
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <div className={styles.leftColumn}>
            <input type="hidden" name="id" value={student.id} readOnly />
            <label>Name</label>
            <input type="text" name="Name" disabled value={student.name} readOnly />
            <label>Admission</label>
            <input type="number" name="Admission" disabled value={student.admission} readOnly />
            <label>Course</label>
            <input type="course" name="course" disabled value={student.course} readOnly />
            <label>Admission date</label>
            <input type="text" name="admissionDate" disabled value={student.admindate} readOnly />
            <label>Telephone</label>
            <input type="text" disabled value={student.telephone} name="telephone" readOnly />
            <label>Resumed Date</label>
            <input type="text" disabled value={student.createdAt?.toString().slice(4, 16)} readOnly />
            <label>Units covered</label>
            <textarea
              className={styles.textareaContainer}
              name="covered"
              id="covered"
              rows="5"
              disabled value={student.covered}
            ></textarea>
          </div>
          <div className={styles.rightColumn}>
            <label>Email</label>
            <input type="email" disabled value={student.email} name="email" readOnly />
            <label>Exam Body</label>
            <select name="exam" id="exam" disabled value={student.exam}>
              <option value="general">Choose Exam</option>
              <option value="KNEC">KNEC</option>
              <option value="JPUK">JPUK</option>
              <option value="ICM">ICM</option>
            </select>

            <label>Module/Semester</label>
            <select name="module" id="module" disabled value={student.module}>
              <option value="general">Choose Module</option>
              <option value="ModI" >Module I</option>
              <option value="ModII" >Module II</option>
              <option value="ModIII" >Module III</option>
            </select>
            <label>Mode of study</label>
            <select name="modStudy" id="modStudy" disabled value={student.modStudy}>
              <option value="general">Mode of study</option>
              <option value="Fullday">Fullday</option>
              <option value="Evening">Evening</option>
              <option value="Distance">Distance</option>
              <option value="Virtual">Virtual</option>
              <option value="Sartuday">Sartuday</option>
            </select>
            <label>Level</label>
            <select name="level" id="level" disabled value={student.level}>
              <option value="general">Level</option>
              <option value="Certificate">Certificate</option>
              <option value="Diploma">Diploma</option>
            </select>
            <label>Accommodation</label>
            <select name="accommodation" id="accommodation" disabled value={student.accommodation}>
              <option value="general">Accommodation</option>
              <option value="Hostel">Hostel</option>
              <option value="Non-resident">Non-resident</option>
            </select>
            <label>Units not covered</label>
            <textarea
              className={styles.textareaContainer}
              name="not covered"
              id="uncovered"
              rows="5"
              disabled value={student.uncovered}
            ></textarea>
            <button type="submit">Download/Share</button>
          </div>
        </form>
      </div>
    </div>


  );
};

export default SingleUserPage;