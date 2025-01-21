import React from "react";
import RecipeCreationWizard from "./RecipeCreationWizard/RecipeCreationWizard";
import { Container, CssBaseline } from "@mui/material";
import useRecipe from "../hooks/useRecipe";
import { Recipe } from "../types/types";

function App() {
  const { recipe, setRecipeState } = useRecipe(undefined);

  function saveRecipeToDatabase(recipe: Recipe) {
    setRecipeState(recipe);
    console.log("Recipe saved to database: ", recipe);
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
