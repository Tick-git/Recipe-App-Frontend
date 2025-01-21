import { GeneralRecipeData } from "../types/types";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import GeneralPage from "./GeneralPage";
import IngredientPage from "./IngredientPage";
import { Ingredient } from "../types/types";
import InstructionPage from "./InstructionPage";
import { Instruction } from "../types/types";
import { Recipe } from "../types/types";
import { grey } from "@mui/material/colors";
import useStepper from "../hooks/useStepper";
import SummaryPage from "./SummaryPage";
import useRecipe from "../hooks/useRecipe";

type Props = {
  recipe?: Recipe;
  saveRecipe: (recipe: Recipe) => void;
};

function RecipeCreationWizard({ recipe: initialRecipe, saveRecipe }: Props) {
  const { step, nextStep, prevStep } = useStepper();
  const { recipe, updateRecipe } = useRecipe(initialRecipe);

  const wizardPageConfigs = [
    {
      label: "General",
      content: (
        <GeneralPage
          changeGeneralRecipeData={(data: GeneralRecipeData) =>
            updateRecipe("generalRecipeData", data)
          }
          generalRecipeData={recipe.generalRecipeData}
          onNextPage={nextStep}
          onPreviousPage={undefined}
        />
      ),
    },
    {
      label: "Ingredients",
      content: (
        <IngredientPage
          changeIngredients={(ingredients: Ingredient[]) =>
            updateRecipe("ingredients", ingredients)
          }
          ingredients={recipe.ingredients}
          onNextPage={nextStep}
          onPreviousPage={prevStep}
        />
      ),
    },
    {
      label: "Instructions",
      content: (
        <InstructionPage
          changeInstructions={(instructions: Instruction[]) =>
            updateRecipe("instructions", instructions)
          }
          instructions={recipe.instructions}
          onNextPage={nextStep}
          onPreviousPage={prevStep}
        />
      ),
    },
    {
      label: "Summary",
      content: <SummaryPage onNextPage={onSaveRecipe} onPreviousPage={prevStep} recipe={recipe} />,
    },
  ];

  function onSaveRecipe() {
    saveRecipe(recipe);
  }

  return (
    <Box
      border={1}
      borderColor={grey[300]}
      boxShadow={5}
      sx={{
        height: "80vh",
        width: "80vh",
        backgroundColor: "white",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        padding: "3rem",
      }}
    >
      <Stepper sx={{ marginTop: 2 }} activeStep={step} alternativeLabel>
        {wizardPageConfigs.map((page, index) => (
          <Step key={index}>
            <StepLabel>{page.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {wizardPageConfigs[step].content}
    </Box>
  );
}

export default RecipeCreationWizard;
