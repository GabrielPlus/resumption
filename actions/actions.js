"use server"

import { revalidatePath } from "next/cache";
import { Student, User } from "../models/models";
import { connectToDB } from "../utils/utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../app/auth";



// user create
export const addUser = async (formData) => {
    const { username, email, password, isAdmin, isActive } = 
        Object.fromEntries(formData);

    try {
        connectToDB();

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username,
            email, 
            password:hashedPassword, 
            isAdmin, 
            isActive, 
        });

    await newUser.save();    
    } catch (err) {
      console.log(err);
        // throw new Error("Failed to create user");
    }

    revalidatePath("/dashboard/staffs")
    redirect("/dashboard/staffs")
};


// student create

export const addStudent = async (formData) => {
  if (!formData) {
      console.error("formData is undefined");
      return;
  }

  const { name, admission, course, admindate, email, telephone, exam, module, modStudy, level, accommodation, covered, uncovered } = formData;

  try {
      connectToDB();
      
      const newStudent = new Student({
          name, 
          admission, 
          course,
          admindate,
          email, 
          telephone, 
          exam, 
          module, 
          modStudy, 
          level, 
          accommodation, 
          covered, 
          uncovered,
      });

      await newStudent.save(); 
      return { success: true, message: "Student created successfully" };   
  } catch (err) {
      console.log(err);
      // throw new Error("Failed to create student");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
};



// student delete
export const deleteStudent = async (formData) => {
    const { id } = 
        Object.fromEntries(formData);

    try {
        connectToDB();
        await Student.findByIdAndDelete(id)    
    } catch (err) {
      console.log(err);
        // throw new Error("Failed to create user");
    }

    revalidatePath("/dashboard/students")
};


//user delete 

export const deleteUser = async (formData) => {
    const { id } = 
        Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id)
    } catch (err) {
      console.log(err);
        // throw new Error("Failed to create user");
    }

    revalidatePath("/dashboard/staffs")
};


export const authenticate = async (prevState, formData) => {
  const { username, password } = formData;

  try {
    // Assuming signIn function accepts 'method' and 'credentials' parameters
    await signIn("credentials", { username, password });
    // If additional parameters are required, pass them as needed
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      throw new Error("Incorrect username or password!");
    }
    throw err;
  }
};
