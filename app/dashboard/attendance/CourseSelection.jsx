"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import axios from "axios";
import './CourseSelection.css'; // Import your CSS file for custom styling

function CourseSelection({ selectedCourse }) {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get("/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Failed to fetch courses", error);
      }
    }

    fetchCourses();
    setIsMounted(true);
  }, []);

  const handleCourseChange = (value) => {
    setSelected(value);
    selectedCourse(value); // Pass the selected course up
  };

  if (!isMounted) {
    return null; // Return nothing or a loading spinner until mounted
  }

  return (
    <div>
      <Select value={selected} onValueChange={handleCourseChange}>
        <SelectTrigger>
          <Button>{selected ? selected : "Select a course"}</Button>
        </SelectTrigger>
        <SelectContent className="custom-dropdown"> {/* Apply custom styles here */}
          {courses.map((course) => (
            <SelectItem key={course._id} value={course.name}>
              {course.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CourseSelection;
