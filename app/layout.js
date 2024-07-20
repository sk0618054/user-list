// app/layout.js
import React from "react";
import { CssBaseline } from "@mui/material";
import "./globals.css";
const RootLayout = ({ children }) => {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, height: "100%" }}>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
