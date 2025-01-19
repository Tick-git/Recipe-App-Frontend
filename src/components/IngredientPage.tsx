import { useState } from "react";
import WizardPage, { PageProps } from "./WizardPage";
import IngredientInput from "./IngredientInput";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import IngredientDisplay from "./IngredientDisplay";

export type Ingredient = {
  name: string;
  amount: string;
  unit: string;
};

type Props = PageProps & {
  ingredients: Ingredient[];
  changeIngredients: (ingredients: Ingredient[]) => void;
};

function IngredientPage({
  onNextPage: onNextPageParent,
  onPreviousPage: onPreviousPageParent,
  ingredients,
  changeIngredients,
}: Props) {
  const [ingredientsLocal, setIngredients] = useState<Ingredient[]>(ingredients);

  function onNextPage() {
    changeIngredients(ingredientsLocal);
    onNextPageParent();
  }

  function onPreviousPage() {
    changeIngredients(ingredientsLocal);

    if (onPreviousPageParent) {
      onPreviousPageParent();
    }
  }

  function addNewIngredient(ingredient: Ingredient): void {
    console.log(ingredient);
    setIngredients((prev) => [...prev, ingredient]);
  }

  function deleteIngredient(id: number): void {
    setIngredients((prev) => prev.filter((_, index) => index !== id));
  }

  return (
    <WizardPage title="Ingredients" onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        border={1}
        sx={{ padding: "1rem", borderColor: grey[300], overflowY: "scroll" }}
      >
        <IngredientInput addNewIngredient={addNewIngredient}></IngredientInput>
        {ingredientsLocal.slice().reverse().map((ingredient, index) => (
          <IngredientDisplay
            id={ingredientsLocal.length - 1 - index}
            key={ingredientsLocal.length - 1 - index}
            ingredient={ingredient}
            deleteIngredient={deleteIngredient}
          />
        ))}
      </Box>
    </WizardPage>
  );
}

export default IngredientPage;
