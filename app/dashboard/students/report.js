import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

// define a generatePDF function that accepts a students argument
const generatePDF = students => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles, including a "No" column for numbering
  const tableColumn = ["No", "Name", "Admission", "Course", "Resumed On"];
  // define an empty array of rows
  const tableRows = [];

  // for each student, pass the relevant data into an array
  students.forEach((student, index) => {
    const studentData = [
      index + 1,  // Add the index + 1 for numbering
      student.name,
      student.admission,
      student.course,
      format(new Date(student.createdAt), "yyyy-MM-dd")
    ];
    // push each student's info into a row
    tableRows.push(studentData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // document title, margin-top + margin-left
  doc.text("Student Resumption Report", 14, 15);
  // we define the name of our PDF file.
  doc.save(`student_report_${dateStr}.pdf`);
};

export default generatePDF;
