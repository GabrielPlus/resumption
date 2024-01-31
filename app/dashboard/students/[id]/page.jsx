import styles from "@/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Pius Gabriel
      </div>
      <div className={styles.formContainer}>
      <form action="" className={styles.form}>
                <label>Name</label>
                <input type="text" placeholder="Name" name="Name" required />
                <label>Admmision</label>
                <input type="number" placeholder="Admmision" name="Admmision" required />
                <label>Course</label>
                <input type="course" placeholder="course" name="course" required />
                <label>Admmision date</label>
                <input type="date" placeholder="admmisionDate" name="admmisionDate" required />
                <label>Email</label>
                <input type="email" placeholder="email" name="email" required />
                <select name="exam" id="exam">
                    <option value="general">Choose Exam</option>
                    <option value="KNEC">KNEC</option>
                    <option value="JPUK">JPUK</option>
                    <option value="ICM">ICM</option>
                </select>
                <select name="module" id="module">
                    <option value="general">Choose Module</option>
                    <option value="ModI">Module I</option>
                    <option value="ModII">Module II</option>
                    <option value="ModIII">Module III</option>
                </select>
                <select name="ModStudy" id="ModStudy">
                    <option value="general">Mode of study</option>
                    <option value="Fullday">Fullday</option>
                    <option value="Evening">Evening</option>
                    <option value="Distance">Distance</option>
                    <option value="Virtual">Virtual</option>
                    <option value="Sartuday">Sartuday</option>
                </select>
                <select name="level" id="level">
                    <option value="general">Level</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Diploma">Diploma</option>
                </select>
                <select name="accomodation" id="accomodation">
                <option value="general">Accomodation</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Non-resident">Non-resident</option>
                </select>
                <textarea className={styles.textareaContainer}
                    name="covered"
                    id="covered"
                    //  cols="30" 
                    rows="5"
                    placeholder="Units Covered"
                ></textarea>

                <textarea className={styles.textareaContainer}
                    name="not covered"
                    id="notcovered"
                    //  cols="30" 
                    rows="5"
                    placeholder="Units not Covered"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
      </div>
    </div>
  );
};

export default SingleUserPage;