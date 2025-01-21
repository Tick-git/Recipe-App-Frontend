import { GeneralRecipeData } from "../types/types";
import SummaryListElement from "./SummaryListElement";
import LabelWithValue from "./LabelWithValue";

type Props = {
  generalRecipeData: GeneralRecipeData;
};

function GeneralSummary({ generalRecipeData }: Props) {
  return (
    <SummaryListElement title="General">
      <LabelWithValue label="Name:" value={generalRecipeData.name} />
      <LabelWithValue label="Author:" value={generalRecipeData.author} />
      <LabelWithValue label="Time:" value={generalRecipeData.time} />
      <LabelWithValue label="Difficulty:" value={generalRecipeData.difficulty} />
    </SummaryListElement>
  );
}

export default GeneralSummary;
