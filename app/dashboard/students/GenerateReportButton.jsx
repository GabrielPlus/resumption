// Client-side component with "use client" directive
"use client";

import React from 'react';
import generatePDF from './report'; // Adjust the path

const GenerateReportButton = () => {
    const generateReport = async () => {
        try {
            const response = await fetch('/api/students?all=true');
            const data = await response.json();
            if (response.ok) {
                generatePDF(data.students);  // Assuming generatePDF is the function to create the PDF
            } else {
                console.error('Failed to fetch all students:', data.error);
            }
        } catch (err) {
            console.error('Error generating report:', err);
        }
    };

    return (
        <button onClick={generateReport}>Generate Report</button>
    );
};

export default GenerateReportButton;
