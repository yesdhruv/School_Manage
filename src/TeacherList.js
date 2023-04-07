import React, { useState } from "react";
import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core";

function TeacherList() {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    class: "",
  });
  const [teachers, setTeachers] = useState([
    { name: "Sandeep Maheshwari", subject: "Maths", class: "10th" },
    { name: "Gopal Das", subject: "Science", class: "10th" },
    { name: "Vivek Bindra", subject: "English", class: "10th" },
  ]);

  const handleAddTeacher = () => {
    // Check if any of the fields are empty
    if (
      newTeacher.name === "" ||
      newTeacher.subject === "" ||
      newTeacher.class === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    // Logic to add new teacher to the database
    setTeachers([...teachers, newTeacher]);
    setNewTeacher({ name: "", subject: "", class: "" });
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          label="Name"
          value={newTeacher.name}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, name: e.target.value })
          }
        />
        <TextField
          label="Subject"
          value={newTeacher.subject}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, subject: e.target.value })
          }
        />
        <TextField
          label="Class"
          value={newTeacher.class}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, class: e.target.value })
          }
        />
        <Button variant="contained" color="primary" onClick={handleAddTeacher}>
          Add Teacher
        </Button>
      </Grid>
      {teachers.map((teacher, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3}>
            <Typography variant="h6">{teacher.name}</Typography>
            <Typography>Subject: {teacher.subject}</Typography>
            <Typography>Class: {teacher.class}</Typography>
            <Button variant="contained" olor="secondary">
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </>
  );
}
export default TeacherList;
