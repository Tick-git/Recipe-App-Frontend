import { useState } from "react";
import { Recipe } from "../types/types";
import { EASY_SELECT } from "../constants/constants";

function useRecipe(recipe: Recipe | undefined) {
  const [recipeLocal, setRecipeState] = useState<Recipe>(createInitialRecipe(recipe));

  function createInitialRecipe(recipe: Recipe | undefined): Recipe {
    if (recipe) {
      return recipe;
    }

    return {
      generalData: {
        name: "",
        author: "",
        time: "",
        difficulty: EASY_SELECT,
      },
      ingredients: [],
      instructions: [],
    };
  }

  const updateRecipe = (key: keyof Recipe, value: any) => {
    setRecipeState((prev) => ({ ...prev, [key]: value }));
  };

  return { recipe: recipeLocal, updateRecipe, setRecipeState };
}

export default useRecipe;
