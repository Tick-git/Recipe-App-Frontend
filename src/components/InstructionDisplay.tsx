import { Box, Button, TextField } from "@mui/material";
import { Instruction } from "../types/types";

type Props = {
  instruction: Instruction;
  deleteInstruction: (id: number) => void;
};

function InstructionDisplay({ instruction, deleteInstruction }: Props) {
  function onDeleteInstructionClicked(): void {
    deleteInstruction(instruction.step - 1);
  }

  return (
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      <TextField
        name="instruction"
        label={`Step ${instruction.step}`}
        variant="outlined"
        value={instruction.text}
        multiline
        disabled
        rows={3}
        sx={{ flex: 3 }}
      />
      <Button
        variant="contained"
        onClick={onDeleteInstructionClicked}
        color="error"
        sx={{ flex: 0.2 }}
      >
        X
      </Button>
    </Box>
  );
}

export default InstructionDisplay;
