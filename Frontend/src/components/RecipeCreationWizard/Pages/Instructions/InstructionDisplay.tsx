import { TextField } from "@mui/material";
import { Instruction } from "../../../../types/types";
import WizardListElement from "../Helper/WizardListElement";

type Props = {
  instruction: Instruction;
  deleteInstruction: (id: number) => void;
};

function InstructionDisplay({ instruction, deleteInstruction }: Props) {
  function onDeleteInstructionClicked(): void {
    deleteInstruction(instruction.step - 1);
  }

  return (
    <WizardListElement buttonText="X" onClick={onDeleteInstructionClicked} buttonColor="error">
      <TextField
        name="instruction"
        label={`Step ${instruction.step}`}
        value={instruction.text}
        multiline
        disabled
        rows={3}
        sx={{ flex: 3 }}
        slotProps={{ inputLabel: { shrink: true } }}
      />
    </WizardListElement>
  );
}

export default InstructionDisplay;
