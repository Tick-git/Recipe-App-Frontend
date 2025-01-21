import { useState } from "react";
import WizardListBox from "./WizardListBox";
import WizardPage from "./WizardPage";
import { PageProps } from "../types/types";
import InstructionInput from "./InstructionInput";
import { Instruction } from "../types/types";
import InstructionDisplay from "./InstructionDisplay";

type Props = PageProps & {
  changeInstructions: (instructions: Instruction[]) => void;
  instructions: Instruction[];
};

function InstructionPage({
  onNextPage: onNextPageParent,
  onPreviousPage: onPreviousPageParent,
  changeInstructions,
  instructions,
}: Props) {
  const [localInstructions, setInstructions] = useState<Instruction[]>(instructions);

  function onNextPage() {
    changeInstructions(localInstructions);
    onNextPageParent();
  }

  function onPreviousPage() {
    if (onPreviousPageParent) {
      changeInstructions(localInstructions);
      onPreviousPageParent();
    }
  }

  function deleteInstruction(id: number): void {
    const filteredInstructions = localInstructions.filter((_, index) => index !== id);

    filteredInstructions.forEach((element) => {
      element.step = filteredInstructions.indexOf(element) + 1;
    });

    setInstructions(filteredInstructions);
  }

  function RenderAddedInstructions() {
    return localInstructions
      .slice()
      .reverse()
      .map((instruction, index) => (
        <InstructionDisplay
          key={localInstructions.length - 1 - index}
          instruction={instruction}
          deleteInstruction={deleteInstruction}
        />
      ));
  }

  function addNewInstruction(instruction: Instruction): void {
    setInstructions((prev) => [...prev, instruction]);
  }

  return (
    <WizardPage onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
      <WizardListBox>
        <InstructionInput
          step={localInstructions.length + 1}
          addNewInstruction={addNewInstruction}
        />
        {RenderAddedInstructions()}
      </WizardListBox>
    </WizardPage>
  );
}

export default InstructionPage;
