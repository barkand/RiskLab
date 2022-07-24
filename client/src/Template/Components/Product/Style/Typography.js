import React from "react";
import { Typography } from "@mui/material";

const TypographyHeader = ({ children }) => (
  <Typography variant="h2" sx={{ textAlign: "center", paddingBottom: "30px" }}>
    {children}
  </Typography>
);

const TypographyTitle = ({ children }) => (
  <Typography
    variant="h4"
    sx={{ textAlign: "center", paddingTop: "80px", paddingBottom: "20px" }}
  >
    {children}
  </Typography>
);

const TypographyBody = ({ children }) => (
  <Typography variant="body1" sx={{ marginX: "0.8rem", paddingBottom: "20px" }}>
    {children}
  </Typography>
);

export { TypographyHeader, TypographyTitle, TypographyBody };
