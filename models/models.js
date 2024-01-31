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
  admissionDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        // Ensure the date is not in the future
        return value <= new Date();
      },
      message: 'Admission date must not be in the future',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  exam: {
    type: String,
    enum: ['general', 'KNEC', 'JPUK', 'ICM'],
    default: 'general',
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
  notCovered: {
    type: String,
  },
}, { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);