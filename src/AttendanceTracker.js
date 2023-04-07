import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
// import {studentLength} from "./StudentList";

function AttendanceTracker() {
  const currentDate = new Date();
   const date = currentDate.toLocaleDateString();
  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h6">Attendance Tracker</Typography>
          <Typography>Class: 10th</Typography>
          <Typography>Current Date: {date}</Typography>
          <Typography>Present: 10</Typography>
          <Typography>Absent: 3</Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default AttendanceTracker;
