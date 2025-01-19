import { grey } from "@mui/material/colors";
import { EASY_SELECT, GeneralRecipeData } from "./GeneralRecipeDataForm";
import { useState } from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import WizardPage from "./WizardPage";
import GeneralRecipeDataPage from "./GeneralRecipeDataPage";
import IngredientPage, { Ingredient } from "./IngredientPage";

type Recipe = {
  generalRecipeData: GeneralRecipeData;
  ingredients: Ingredient[];
};

export default function AddRecipeWizard() {
  const [recipe, setRecipeState] = useState<Recipe>({
    generalRecipeData: {
      name: "",
      author: "",
      time: "",
      difficulty: EASY_SELECT,
    },
    ingredients: [],
  });

  const [currentStep, setCurrentStep] = useState<number>(0);

  function changeGeneralRecipeData(data: GeneralRecipeData) {
    setRecipeState((prev) => ({ ...prev, generalRecipeData: data }));
  }

  const steps = ["General", "Ingredients", "Instructions"];

  function goNext(): void {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  function goPrevious(): void {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  function changeIngredients(ingredients: Ingredient[]): void {
    setRecipeState((prev) => ({ ...prev, ingredients: ingredients }));
  }

  return (
    <Box
      border={1}
      borderColor={grey[300]}
      boxShadow={5}
      sx={{
        height: "80vh",
        width: "60%",
        backgroundColor: "white",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
      }}
    >
      <Stepper sx={{ marginTop: 2 }} activeStep={currentStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box display={"flex"} flexDirection={"column"} flexGrow={1} sx={{ overflowY: "auto" }}>
        {currentStep === 0 && (
          <GeneralRecipeDataPage
            changeGeneralRecipeData={changeGeneralRecipeData}
            generalRecipeData={recipe.generalRecipeData}
            onNextPage={goNext}
            onPreviousPage={undefined}
          />
        )}
        {currentStep === 1 && (
          <IngredientPage
            changeIngredients={changeIngredients}
            ingredients={recipe.ingredients}
            onNextPage={goNext}
            onPreviousPage={goPrevious}
          ></IngredientPage>
        )}
        {currentStep === 2 && (
          <WizardPage title="" onNextPage={goNext} onPreviousPage={goPrevious} />
        )}
      </Box>
    </Box>
  );
}
