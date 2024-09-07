"use client";

import React, { useState } from "react";
import MonthSelection from "./MonthSelection";
import CourseSelection from "./CourseSelection";

function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");

  // Handle month change
  const handleMonthChange = (newMonth) => {
    setSelectedMonth(newMonth);
    console.log("Selected month:", newMonth); // Do something with the selected month
  };

  // Handle course change
  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    console.log("Selected course:", course); // Do something with the selected course
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Attendance</h2>
      
      <div className="flex gap-8 p-5  shadow-sm">
        <div className="ml-10">
          <MonthSelection selectedMonth={handleMonthChange} />
        </div>
        <div className="ml-10">
          <CourseSelection selectedCourse={handleCourseChange} />
        </div>
      </div>
    </div>
  );
}

export default Attendance;
