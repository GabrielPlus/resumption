"use client";

import React, { useEffect, useState } from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { Skeleton } from "@/components/ui/skeleton";// Import the Skeleton component
import styles from './card.module.css';

const Card = () => {
  const [studentCount, setStudentCount] = useState(null); // Start with null to differentiate between loading and loaded states

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/test/data');  // Update the API route path
        const data = await response.json();
        setStudentCount(data.studentCount);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={styles.text}>
        <span className={styles.title}>Students Resumed</span>
        {studentCount === null ? ( // Show Skeleton if data is still loading
          <Skeleton className="w-16 h-6 bg-skeleton" />
        ) : (
          <span className={styles.number}>{studentCount}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
