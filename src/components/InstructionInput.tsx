import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Instruction } from "../types/types";

type Props = {
  addNewInstruction: (instruction: Instruction) => void;
  step: number;
};

function InstructionInput({ addNewInstruction, step }: Props) {
  const [instruction, setInstruction] = useState<string>("");

  function onAddNewInstructionClicked(): void {
    setInstruction("");
    addNewInstruction({ step: step, text: instruction });
  }

  return (
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      <TextField
        name="instruction"
        label={`Step ${step}`}
        variant="outlined"
        value={instruction}
        multiline
        rows={3}
        onChange={(event) => setInstruction(event.target.value)}
        sx={{ flex: 3 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onAddNewInstructionClicked}
        sx={{ flex: 0.2 }}
      >
        Add
      </Button>
    </Box>
  );
}

export default InstructionInput;
