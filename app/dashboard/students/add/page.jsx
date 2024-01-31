import styles from '@/ui/dashboard/users/addUser/addUser.module.css'

const AddstudentPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="name" name="name" required />
                <input type="number" placeholder="admmision" name="admmision" required />
                <input type="course" placeholder="course" name="course" required />
                <input type="date" placeholder="admmisionDate" name="admmisionDate" required />
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
                <textarea
                    name="covered"
                    id="covered"
                    //  cols="30" 
                    rows="5"
                    placeholder="Units Covered"
                ></textarea>

                <textarea
                    name="not covered"
                    id="notcovered"
                    //  cols="30" 
                    rows="5"
                    placeholder="Units not Covered"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddstudentPage;