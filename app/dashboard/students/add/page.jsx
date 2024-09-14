"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { addStudent } from "../../../../actions/actions";
import styles from '@/ui/dashboard/users/addUser/addUser.module.css';

const AddStudentPage = () => {
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState([]); // State to hold the course list
    const [selectedCourse, setSelectedCourse] = useState(""); // State to store the selected course

    // Fetch courses from the database on component mount
    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await axios.get("/api/courses"); // Adjust the API route if needed
                setCourses(response.data); // Assuming the data is an array of course objects
            } catch (error) {
                console.error("Failed to fetch courses", error);
            }
        }

        fetchCourses();
    }, []);

    // Form submission handler
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
                
                {/* Course dropdown selection */}
                <select name="course" id="course" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} required>
                    <option value="">Choose course</option> {/* Default option */}
                    {courses.map((course) => (
                        <option key={course._id} value={course.name}>
                            {course.name}
                        </option>
                    ))}
                </select>

                <input type="text" placeholder="Admission Date" name="admindate" required />
                <input type="text" placeholder="Phone" name="telephone" />
                <input type="email" placeholder="Email" name="email" required />
                
                {/* Other form fields */}
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

                <button type="submit" className={styles.button}>{loading ? "Please Wait...." : "Add Student"}</button>
            </form>
        </div>
    );
};

export default AddStudentPage;



