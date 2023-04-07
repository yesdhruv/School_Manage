import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

function StudentList() {
  const students = [
    { name: "Dhruv Rawat", class: "10th", rollNo: 1001 },
    { name: "Ajay Negi", class: "10th", rollNo: 1002 },
    { name: "Geeta Bisht", class: "10th", rollNo: 1003 }
  ];
  // const studentLength = Object.keys(students).length; 
  const handleDeleteStudent = (rollNo) => {
    // Logic to delete student from the database
    console.log(`Deleted student with roll no ${rollNo}`);
  };

  return (
    <>
      {students.map((student, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3}>
            <Typography variant="h6">{student.name}</Typography>
            <Typography>Class: {student.class}</Typography>
            <Typography>Roll No: {student.rollNo}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteStudent(student.rollNo)}
            >
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </>
  );
}

export  default  StudentList ;
