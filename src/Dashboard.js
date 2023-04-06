import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import AttendanceTracker from "./AttendanceTracker";
import NoticeBoard from "./NoticeBoard";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#3f51b5"
  },
  container: {
    marginTop: theme.spacing(3)
  },
  header: {
    marginBottom: theme.spacing(2)
  }
}));

function Dashboard() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // Code to fetch data for selected tab
  }, [selectedTab]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="Students" />
          <Tab label="Teachers" />
          <Tab label="Attendance" />
          <Tab label="NoticeBoard" />
        </Tabs>
      </AppBar>
      <Container maxWidth="lg" className={classes.container}>
        {selectedTab === 0 && (
          <>
            <Typography variant="h4" className={classes.header}>
              Student List
            </Typography>
            <Grid container spacing={3}>
              <StudentList />
            </Grid>
          </>
        )}
        {selectedTab === 1 && (
          <>
            <Typography variant="h4" className={classes.header}>
              Teacher List
            </Typography>
            <Grid container spacing={3}>
              <TeacherList />
            </Grid>
          </>
        )}
        {selectedTab === 2 && (
          <>
            <Typography variant="h4" className={classes.header}>
              Attendance Tracker
            </Typography>
            <Grid container spacing={3}>
              <AttendanceTracker />
            </Grid>
          </>
        )}
        {selectedTab === 3 && (
          <>
            <Typography variant="h4" className={classes.header}>
              NoticeBoard.
            </Typography>
            <Grid container spacing={3}>
              <NoticeBoard />
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}

export default Dashboard;
