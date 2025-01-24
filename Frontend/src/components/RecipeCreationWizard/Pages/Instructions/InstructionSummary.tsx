import { Instruction } from "../../../../types/types";
import LabelWithValue from "../Helper/LabelWithValue";
import SummaryListElement from "../Helper/SummaryListElement";

type Props = {
  instructions: Instruction[];
};

function InstructionSummary({ instructions }: Props) {
  function renderInstructions() {
    return instructions.map((instruction, index) => (
      <LabelWithValue
        sxParent={{ marginBottom: "1rem" }}
        key={index}
        label={`Step ${instruction.step}`}
        value={instruction.text}
      />
    ));
  }

  return (
    <SummaryListElement title="Instructions">
      {instructions.length > 0 ? (
        renderInstructions()
      ) : (
        <LabelWithValue label="" value="No instructions available" />
      )}
    </SummaryListElement>
  );
}

export default InstructionSummary;
