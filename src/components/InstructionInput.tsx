import { TextField } from "@mui/material";
import { useState } from "react";
import { Instruction } from "../types/types";
import WizardListElement from "./WizardListElement";

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
    <WizardListElement buttonText="Add" onClick={onAddNewInstructionClicked} buttonColor="primary">
      <TextField
        name="instruction"
        label={`Step ${step}`}
        value={instruction}
        multiline
        rows={3}
        onChange={(event) => setInstruction(event.target.value)}
        sx={{ flex: 3 }}
        slotProps={{ inputLabel: { shrink: true } }}
      />
    </WizardListElement>
  );
}

export default InstructionInput;
