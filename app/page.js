// app/page.js
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Box, Typography } from "@mui/material";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleUserSelect = (user) => {
    setDetailsLoading(true);
    setSelectedUser(user);
    setDetailsLoading(false);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box
            sx={{
              p: 2,
              borderRight: "1px solid #e0e0e0",
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <UserList
              users={users}
              onSelectUser={handleUserSelect}
              loading={loading}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              User Details
            </Typography>
            <UserDetails user={selectedUser} loading={detailsLoading} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
