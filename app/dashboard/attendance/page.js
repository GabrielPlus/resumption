"use client";

import React, { useState } from "react";
import MonthSelection from "./MonthSelection";
import CourseSelection from "./CourseSelection";
import Search from "@/ui/dashboard/search/search";

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

      <div
        className="flex gap-4 p-3  rounded-lg my-5"
        style={{ backgroundColor: "#2e374a" }}
      >
        <div className="flex gap-2 items-center">
          <MonthSelection selectedMonth={handleMonthChange} />
        </div>
        <div className="flex gap-2 items-center">
          <CourseSelection selectedCourse={handleCourseChange} />
        </div>
        <Search placeholder="Search for a student.." />
      </div>
    </div>
  );
}

export default Attendance;
