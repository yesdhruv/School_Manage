import React, { useState } from "react";
import { Grid, Paper, Typography, Button, TextField } from "@material-ui/core";

function NoticeBoard() {
  const [newNotice, setNewNotice] = useState({ title: "", content: "" });
  const [notices, setNotices] = useState([]);

  const handleAddNotice = () => {
    // Logic to add new notice to the database
    setNotices([...notices, newNotice]);
    setNewNotice({ title: "", content: "" });
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          label="Title"
          value={newNotice.title}
          onChange={(e) =>
            setNewNotice({ ...newNotice, title: e.target.value })
          }
        />
        <TextField
          label="Content"
          value={newNotice.content}
          onChange={(e) =>
            setNewNotice({ ...newNotice, content: e.target.value })
          }
        />
        <Button variant="contained" color="primary" onClick={handleAddNotice}>
          Add Notice
        </Button>
      </Grid>
      {notices.map((notice, index) => (
        <Grid item xs={12} key={index}>
          <Paper elevation={3}>
            <Typography variant="h6">{notice.title}</Typography>
            <Typography>{notice.content}</Typography>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </>
  );
}

export default NoticeBoard;
