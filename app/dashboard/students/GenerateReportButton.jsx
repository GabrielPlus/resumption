"use client";

import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import styles from "@/ui/dashboard/users/users.module.css";
import generatePDF from './report'; // Adjust the path

const GenerateReportButton = () => {
    const generateReport = async () => {
        try {
            const response = await fetch('/api/students?all=true');
            const data = await response.json();
            if (response.ok) {
                generatePDF(data.students);
                toast.success("Check Download.");
            } else {
                console.error('Failed to fetch all students:', data.error);
            }
        } catch (err) {
            console.error('Error generating report:', err);
            toast.error("There was an error generating the report.");
        }
    };

    return (
        <>
            <button className={styles.reportButton} onClick={generateReport}>
                Generate Report
            </button>
            <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
        </>
    );
};

export default GenerateReportButton;
