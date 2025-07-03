import RecipeCreationWizard from "./RecipeCreationWizard/RecipeCreationWizard";
import { Container, CssBaseline } from "@mui/material";
import useRecipe from "../hooks/useRecipe";
import { Recipe } from "../types/types";
import React from "react";

function App() {
  const { recipe, setRecipeState } = useRecipe(undefined);

  function saveRecipeToDatabase(recipe: Recipe) {
    fetch("https://localhost:64455/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Recipe>;
      })
      .then((saved) => {
        setRecipeState(saved);
        console.log("Recipe saved to database: ", saved);
      })
      .catch((err) => {
        console.error("Failed to save recipe:", err);
      });
  }

  return (
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
        <RecipeCreationWizard saveRecipe={saveRecipeToDatabase} recipe={recipe} />
      </Container>
    </React.Fragment>
  );
}

export default App;
