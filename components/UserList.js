// components/UserList.js
import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";

const UserList = ({ users, onSelectUser, loading }) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (users.length === 0) {
    return <p>No data to show</p>;
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        User
      </Typography>
      <Box
        sx={{
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <List>
          {users.map((user) => (
            <ListItem
              button
              key={user.id}
              onClick={() => onSelectUser(user)}
              sx={{
                borderBottom: "1px solid #e0e0e0",
                alignItems: "center", // Center items vertically
                padding: "10px 0", // Add some padding for better spacing
              }}
            >
              <ListItemAvatar>
                <Avatar src={user.avatar} sx={{ width: 56, height: 56 }} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.profile.firstName} ${user.profile.lastName}`}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {user.jobTitle}
                    </Typography>
                    <br />
                    {user.profile.username}
                  </>
                }
                sx={{ ml: 2 }} // Add margin-left to create space
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default UserList;
