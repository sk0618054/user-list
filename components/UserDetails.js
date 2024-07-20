// components/UserDetails.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CircularProgress,
  Box,
} from "@mui/material";

const UserDetails = ({ user, loading }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (!user) {
    return <p>Select a user to see the details</p>;
  }

  return (
    <Card sx={{ display: "flex", p: 2 }}>
      <Avatar src={user.avatar} sx={{ width: 100, height: 100, mr: 2 }} />
      <CardContent>
        <Typography variant="h5">{`${user.profile.firstName} ${user.profile.lastName}`}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {user.jobTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.profile.email}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.Bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetails;
