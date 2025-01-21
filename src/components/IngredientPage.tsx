import { useState } from "react";
import WizardPage from "./WizardPage";
import { PageProps } from "../types/types";
import IngredientInput from "./IngredientInput";
import IngredientDisplay from "./IngredientDisplay";
import WizardListBox from "./WizardListBox";
import { Ingredient } from "../types/types";

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
    if (onPreviousPageParent) {
      onPreviousPageParent();
      changeIngredients(ingredientsLocal);
    }
  }

  function addIngredient(ingredient: Ingredient): void {
    setIngredients((prev) => [...prev, ingredient]);
  }

  function deleteIngredient(id: number): void {
    setIngredients((prev) => prev.filter((_, index) => index !== id));
  }

  function RenderAddedIngredients() {
    return ingredientsLocal
      .slice()
      .reverse()
      .map((ingredient, index) => (
        <IngredientDisplay
          id={ingredientsLocal.length - 1 - index}
          key={ingredientsLocal.length - 1 - index}
          ingredient={ingredient}
          deleteIngredient={deleteIngredient}
        />
      ));
  }

  return (
    <WizardPage onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
      <WizardListBox>
        <IngredientInput addNewIngredient={addIngredient} />
        {RenderAddedIngredients()}
      </WizardListBox>
    </WizardPage>
  );
}

export default IngredientPage;
