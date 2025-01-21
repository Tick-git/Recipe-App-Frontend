import { Ingredient } from "../types/types";
import SummaryListElement from "./SummaryListElement";
import LabelWithValue from "./LabelWithValue";

type Props = {
  ingredients: Ingredient[];
};

function IngredientSummary({ ingredients }: Props) {
  function renderIngredients() {
    return ingredients.map((ingredient, index) => (
      <LabelWithValue
        key={index}
        label={`${ingredient.amount} ${ingredient.unit}`}
        value={ingredient.name}
      />
    ));
  }

  return (
    <SummaryListElement title="Ingredients">
      {ingredients.length > 0 ? (
        renderIngredients()
      ) : (
        <LabelWithValue label="" value="No ingredients available" />
      )}
    </SummaryListElement>
  );
}

export default IngredientSummary;
