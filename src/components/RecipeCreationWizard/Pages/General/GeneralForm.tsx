import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { GeneralRecipeFormErrors } from "../../../../types/types";
import { GeneralRecipeData } from "../../../../types/types";
import { EASY_SELECT } from "../../../../constants/constants";

type Props = {
  setGeneralRecipeData: React.Dispatch<React.SetStateAction<GeneralRecipeData>>;
  generalRecipeData: GeneralRecipeData;
  generalRecipeErrors: GeneralRecipeFormErrors;
};

function GeneralForm({
  setGeneralRecipeData: setGeneralRecipeData,
  generalRecipeData,
  generalRecipeErrors,
}: Props) {
  const textFieldSlotProps = { formHelperText: { sx: { position: "absolute", bottom: -20 } } };

  function onInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setGeneralRecipeData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Box
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={6}
    >
      <TextField
        label="Recipe name"
        name="name"
        onChange={onInputChange}
        value={generalRecipeData.name}
        error={generalRecipeErrors.name.hasError}
        helperText={generalRecipeErrors.name.message}
        slotProps={textFieldSlotProps}
      />
      <TextField
        label="Author"
        onChange={onInputChange}
        name="author"
        value={generalRecipeData.author}
        error={generalRecipeErrors.author.hasError}
        helperText={generalRecipeErrors.author.message}
        slotProps={textFieldSlotProps}
      />
      <TextField
        label="Time"
        name="time"
        onChange={onInputChange}
        value={generalRecipeData.time}
        error={generalRecipeErrors.time.hasError}
        helperText={generalRecipeErrors.time.message}
        slotProps={textFieldSlotProps}
      />
      <TextField
        select
        label="Difficulty"
        name="difficulty"
        onChange={onInputChange}
        value={generalRecipeData.difficulty}
        slotProps={{
          select: {
            native: true,
          },
        }}
      >
        <option value={EASY_SELECT}>Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </TextField>
    </Box>
  );
}

export default GeneralForm;
