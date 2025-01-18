import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { Container, CssBaseline } from "@mui/material";
import AddRecipeWizard from "./components/AddRecipeWizard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          backgroundColor: "#f5f5f5",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AddRecipeWizard />
      </Container>
    </React.Fragment>
  </StrictMode>
);
