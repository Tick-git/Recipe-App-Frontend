import React, { useEffect } from "react";
import RecipeCreationWizard from "./RecipeCreationWizard/RecipeCreationWizard";
import { Container, CssBaseline } from "@mui/material";
import useRecipe from "../hooks/useRecipe";
import { Recipe } from "../types/types";

function App() {
  const { recipe, setRecipeState } = useRecipe(undefined);

  useEffect(() => {
    fetch("https://localhost:64455/")
      .then((res) => res.json() as Promise<Recipe>)
      .then((data) => {
        setRecipeState(data);
        console.log("Recipe fetched from database: ", data);
      })
      .catch(console.error);
  }, []);

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
