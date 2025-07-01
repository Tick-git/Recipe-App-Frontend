import { TextField } from "@mui/material";
import { Ingredient } from "../../../../types/types";
import WizardListElement from "../Helper/WizardListElement";

type Props = {
  ingredient: Ingredient;
  deleteIngredient: (id: number) => void;
  id: number;
};

function IngredientDisplay({ deleteIngredient, ingredient, id }: Props) {
  function onDeleteIngredientClicked(): void {
    deleteIngredient(id);
  }

  return (
    <WizardListElement buttonText="X" onClick={onDeleteIngredientClicked} buttonColor="error">
      <TextField label="Name" size="small" value={ingredient.name} disabled sx={{ flex: 3 }} />
      <TextField
        label="Amount"
        size="small"
        disabled
        value={ingredient.quantity}
        sx={{ flex: 2 }}
      />
      <TextField label="Unit" size="small" disabled value={ingredient.unit} sx={{ flex: 1 }} />
    </WizardListElement>
  );
}

export default IngredientDisplay;
