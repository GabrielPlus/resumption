import mongoose from 'mongoose';
import { User, Student, Course } from '../models/models';

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};



// Function to fetch users
export async function fetchUsers(q, page) {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users');
  }
}

// Function to fetch a single user by ID
export async function fetchUser(id) {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    // throw new Error('Failed to fetch user');
  }
}

// Function to fetch students
export async function fetchStudents(q = "", page = 1, fetchAll = false) {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 3;

  try {
    connectToDB();

    if (fetchAll) {
      // Fetch all students without pagination
      const students = await Student.find({ name: { $regex: regex } });
      return { students };
    } else {
      // Fetch paginated students
      const count = await Student.countDocuments({ name: { $regex: regex } });
      const students = await Student.find({ name: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));

      return { count, students };
    }
  } catch (err) {
    console.error('Error in fetchStudents:', err);
    throw new Error(`Failed to fetch students: ${err.message}`);
  }
}


// Function to fetch a single student by ID
export async function fetchStudent(id) {
  try {
    connectToDB();
    const student = await Student.findById(id);
    return student;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch student');
  }
}

// Export the getCounts function
export async function getCounts() {
  try {
    const studentCount = await Student.countDocuments();
    const studentsByExam = await Student.aggregate([
      { $group: { _id: '$exam', count: { $sum: 1 } } }
    ]);
    const formattedStudentsByExam = studentsByExam.reduce((acc, item) => {
      acc[item._id] = item.count;
      return acc;
    }, {});
    return { studentCount, studentsByExam: formattedStudentsByExam };
  } catch (error) {
    throw new Error('Error fetching counts');
  }
}


export async function fetchCourses() {
  try {
    connectToDB(); // Ensure DB connection
    const courses = await Course.find(); // Fetch all courses
    return courses;
  } catch (err) {
    console.error('Error fetching courses:', err);
    throw new Error('Failed to fetch courses');
  }
}