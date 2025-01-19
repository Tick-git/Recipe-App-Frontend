import { Box, Button, TextField } from "@mui/material";
import { Ingredient } from "./IngredientPage";

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
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      <TextField
        label="Name"
        size="small"
        value={ingredient.name}
        variant="outlined"
        disabled
        sx={{ flex: 3 }}
      />
      <TextField
        label="Amount"
        size="small"
        disabled
        value={ingredient.amount}
        variant="outlined"
        sx={{ flex: 2 }}
      />
      <TextField
        label="Unit"
        size="small"
        disabled
        value={ingredient.unit}
        variant="outlined"
        sx={{ flex: 1 }}
      />
      <Button
        onClick={onDeleteIngredientClicked}
        variant="contained"
        color="error"
        sx={{ flex: 0.2 }}
      >
        X
      </Button>
    </Box>
  );
}

export default IngredientDisplay;
