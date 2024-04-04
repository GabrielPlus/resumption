import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
);

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  admission: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  admindate: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Ensure the telephone number begins with "254"
        return /^254\d{9}$/.test(value);
      },
      message: 'Telephone number must begin with "254" and have a total of 12 digits.',
    },
  },
  
  exam: {
    type: String,
    enum: ['KNEC', 'JPUK', 'ICM'],
    
  },
  module: {
    type: String,
    enum: ['general', 'ModI', 'ModII', 'ModIII'],
    default: 'general',
  },
  modStudy: {
    type: String,
    enum: ['general', 'Fullday', 'Evening', 'Distance', 'Virtual', 'Saturday'],
    default: 'general',
  },
  level: {
    type: String,
    enum: ['general', 'Certificate', 'Diploma'],
    default: 'general',
  },
  accommodation: {
    type: String,
    enum: ['general', 'Hostel', 'Non-resident'],
    default: 'general',
  },
  covered: {
    type: String,
  },
  uncovered: {
    type: String,
  },
}, { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);