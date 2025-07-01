import { TextField } from "@mui/material";
import { Ingredient } from "../../../../types/types";
import { ChangeEvent, useState } from "react";
import { GRAMM_UNIT } from "../../../../constants/constants";
import { ingredientUtil } from "../../../../util/util";
import WizardListElement from "../Helper/WizardListElement";

type Props = {
  addNewIngredient: (ingredient: Ingredient) => void;
};

function IngredientInput({ addNewIngredient }: Props) {
  const [ingredientLocal, setIngredient] = useState<Ingredient>(ingredientUtil.defaultIngredient());

  function onInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setIngredient((prev) => ({ ...prev, [name]: value }));
  }

  function onAddIngredientClicked(): void {
    setIngredient(ingredientUtil.defaultIngredient());
    addNewIngredient(ingredientLocal);
  }

  return (
    <WizardListElement buttonText="Add" onClick={onAddIngredientClicked} buttonColor="primary">
      <TextField
        onChange={onInputChange}
        value={ingredientLocal.name}
        name="name"
        label="Name"
        size="small"
        sx={{ flex: 3 }}
      />
      <TextField
        label="Quantity"
        size="small"
        sx={{ flex: 2 }}
        onChange={onInputChange}
        value={ingredientLocal.quantity}
        name="quantity"
      />
      <TextField
        select
        label="Unit"
        onChange={onInputChange}
        name="unit"
        size="small"
        value={ingredientLocal.unit}
        sx={{ flex: 1 }}
        slotProps={{
          select: {
            native: true,
          },
        }}
      >
        <option value={GRAMM_UNIT}>{GRAMM_UNIT}</option>
        <option value="kg">kg</option>
        <option value="ml">ml</option>
        <option value="l">l</option>
      </TextField>
    </WizardListElement>
  );
}

export default IngredientInput;
