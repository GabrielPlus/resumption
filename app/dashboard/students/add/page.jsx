"use client";
import styles from '@/ui/dashboard/users/addUser/addUser.module.css';
import { addStudent } from "../../../../actions/actions";
import { useState } from "react";

const AddStudentPage = () => {
    const [loading, setLoading] = useState(false);

    const add = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading state to true when form submission starts
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);
        try {
            await addStudent(formValues);
            // If student addition is successful, you can redirect or perform other actions
        } catch (error) {
            console.error("Error adding student:", error);
            // Handle errors
        } finally {
            setLoading(false); // Reset loading state regardless of success or failure
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={add} className={styles.form}>
                <input type="text" placeholder="Name" name="name" required />
                <input type="number" placeholder="Admission" name="admission" required />
                <input type="text" placeholder="Course" name="course" required />
                <input type="text" placeholder="Admission Date" name="admindate" required />
                <input type="text" placeholder="Phone" name="telephone" />
                <input type="email" placeholder="Email" name="email" required />
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
                <select name="modStudy" id="modStudy">
                    <option value="general">Mode of study</option>
                    <option value="Fullday">Fullday</option>
                    <option value="Evening">Evening</option>
                    <option value="Distance">Distance</option>
                    <option value="Virtual">Virtual</option>
                    <option value="Saturday">Saturday</option>
                </select>

                <select name="level" id="level">
                    <option value="general">Level</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Diploma">Diploma</option>
                </select>
                <select name="accommodation" id="accommodation">
                    <option value="general">Accomodation</option>
                    <option value="Hostel">Hostel</option>
                    <option value="Non-resident">Non-resident</option>
                </select>
                <textarea name="covered" id="covered" rows="5" placeholder="Units Covered"></textarea>
                <textarea name="uncovered" id="uncovered" rows="5" placeholder="Units not Covered"></textarea>
                <button type="submit">{loading ? "Please Wait...." : "Add Student"}</button>
            </form>
        </div>
    );
};

export default AddStudentPage;





