import { PageProps, Recipe } from "../../../types/types";
import WizardPage from "./Helper/WizardPage";
import WizardListBox from "./Helper/WizardListBox";
import GeneralSummary from "./General/GeneralSummary";
import IngredientSummary from "./Ingredient/IngredientSummary";
import InstructionSummary from "./Instructions/InstructionSummary";

type Props = PageProps & {
  recipe: Recipe;
};

function SummaryPage({ onNextPage, onPreviousPage, recipe }: Props) {
  return (
    <WizardPage nextButtonText="Save" onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
      <WizardListBox>
        <GeneralSummary generalRecipeData={recipe.generalRecipeData} />
        <IngredientSummary ingredients={recipe.ingredients} />
        <InstructionSummary instructions={recipe.instructions} />
      </WizardListBox>
    </WizardPage>
  );
}

export default SummaryPage;
