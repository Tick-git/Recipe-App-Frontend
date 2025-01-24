import { useState } from "react";
import { GeneralRecipeData, GeneralRecipeFormErrors } from "../types/types";
import { generalRecipeFormErrorsUtil } from "../util/util";

function useGeneralRecipeValidation() {
  const [generalRecipeErrors, setGeneralRecipeErrors] = useState<GeneralRecipeFormErrors>(
    generalRecipeFormErrorsUtil.getDefaultObject()
  );

  function dataIsValid(data: GeneralRecipeData): boolean {
    const errors: GeneralRecipeFormErrors = generalRecipeFormErrorsUtil.getDefaultObject();

    if (data.name === "") {
      errors.name = { hasError: true, message: "Name is required" };
    }

    if (data.author === "") {
      errors.author = { hasError: true, message: "Author is required" };
    }

    if (data.time === "") {
      errors.time = { hasError: true, message: "Time is required" };
    }

    setGeneralRecipeErrors(errors);

    return (
      errors.name.hasError === false &&
      errors.author.hasError === false &&
      errors.time.hasError === false
    );
  }

  return { generalRecipeErrors, dataIsValid };
}

export default useGeneralRecipeValidation;
