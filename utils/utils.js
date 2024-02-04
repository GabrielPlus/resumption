import mongoose from 'mongoose';

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

import { User, Student } from '../models/models';

// Define a function to get the counts
export async function getCounts() {
  // Count the number of users
  const userCount = await User.countDocuments({});

  // Count the number of students
  const studentCount = await Student.countDocuments({});

  // Return the counts as an object
  return { userCount, studentCount };
}
