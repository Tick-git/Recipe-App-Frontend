import { EASY_SELECT } from "../constants/constants";
import { GeneralRecipeData } from "../types/types";
import { useState } from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import GeneralPage from "./GeneralPage";
import IngredientPage from "./IngredientPage";
import { Ingredient } from "../types/types";
import InstructionPage from "./InstructionPage";
import { Instruction } from "../types/types";
import { Recipe } from "../types/types";
import { grey } from "@mui/material/colors";
import useStepper from "../hooks/useStepper";

function AddRecipeWizard() {
  const { step, nextStep, prevStep } = useStepper();

  const [recipe, setRecipeState] = useState<Recipe>({
    generalRecipeData: {
      name: "",
      author: "",
      time: "",
      difficulty: EASY_SELECT,
    },
    ingredients: [],
    instructions: [],
  });

  const updateRecipe = (key: keyof Recipe, value: any) => {
    setRecipeState((prev) => ({ ...prev, [key]: value }));
  };

  const pagesConfig = [
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
          onNextPage={() => console.log(recipe)}
          onPreviousPage={prevStep}
        />
      ),
    },
  ];

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
        {pagesConfig.map((page, index) => (
          <Step key={index}>
            <StepLabel>{page.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {pagesConfig[step].content}
    </Box>
  );
}

export default AddRecipeWizard;
