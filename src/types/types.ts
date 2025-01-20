export type Recipe = {
  generalRecipeData: GeneralRecipeData;
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type GeneralRecipeData = {
  name: string;
  author: string;
  time: string;
  difficulty: string;
};

export type GeneralRecipeFormErrors = {
  name: { hasError: boolean; message: string };
  author: { hasError: boolean; message: string };
  time: { hasError: boolean; message: string };
};

export type Ingredient = {
  name: string;
  amount: string;
  unit: string;
};

export type Instruction = {
  step: number;
  text: string;
};

export type PageProps = {
  onNextPage: () => void;
  onPreviousPage?: () => void;
};
