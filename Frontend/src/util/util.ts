import { Ingredient } from "../types/types";
import { GRAMM_UNIT } from "../constants/constants";
import { GeneralRecipeFormErrors } from "../types/types";

export const generalRecipeFormErrorsUtil = {
  getDefaultObject(): GeneralRecipeFormErrors {
    return {
      name: { hasError: false, message: "" },
      author: { hasError: false, message: "" },
      time: { hasError: false, message: "" },
    };
  },
};

export const ingredientUtil = {
  defaultIngredient(): Ingredient {
    return {
      name: "",
      quantity: "",
      unit: GRAMM_UNIT,
    };
  },
};
