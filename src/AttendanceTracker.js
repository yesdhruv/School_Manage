import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function AttendanceTracker() {
  return (
    <>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h6">Attendance Tracker</Typography>
          <Typography>Class: 10th</Typography>
          <Typography>Date: 2023-04-06</Typography>
          <Typography>Present: 10</Typography>
          <Typography>Absent: 5</Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default AttendanceTracker;
