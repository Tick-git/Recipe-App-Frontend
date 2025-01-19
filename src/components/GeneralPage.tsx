import { useState } from "react";
import { GeneralRecipeData, GeneralForm } from "./GeneralForm";
import WizardPage, { PageProps } from "./WizardPage";


export type GeneralRecipeFormErrors = {
  name: { hasError: boolean; message: string };
  author: { hasError: boolean; message: string };
  time: { hasError: boolean; message: string };
};

function getDefaultGeneralRecipeErrors(): GeneralRecipeFormErrors {
  return {
    name: { hasError: false, message: "" },
    author: { hasError: false, message: "" },
    time: { hasError: false, message: "" },
  };
}

type Props = PageProps & {
  generalRecipeData: GeneralRecipeData;
  changeGeneralRecipeData: (data: GeneralRecipeData) => void;
};

function GeneralPage({
  onNextPage: onNextPageParent,
  onPreviousPage: onPreviousPageParent,
  generalRecipeData,
  changeGeneralRecipeData,
}: Props) {
  const [generalRecipeDataLocal, setGeneralRecipeData] =
    useState<GeneralRecipeData>(generalRecipeData);

  const [generalRecipeErrors, setGeneralRecipeErrors] = useState<GeneralRecipeFormErrors>(
    getDefaultGeneralRecipeErrors()
  );

  function dataIsValid(data: GeneralRecipeData): boolean {
    const errors: GeneralRecipeFormErrors = getDefaultGeneralRecipeErrors();

    if (data.name === "") {
      errors.name = { hasError: true, message: "Name is required" };
      console.log(errors.name.message);
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

  function onNextPage() {
    if (dataIsValid(generalRecipeDataLocal)) {
      changeGeneralRecipeData(generalRecipeDataLocal);
      onNextPageParent();
    }
  }

  function onPreviousPage() {
    if (onPreviousPageParent) {
      changeGeneralRecipeData(generalRecipeDataLocal);
      onPreviousPageParent();
    }
  }

  return (
    <>
      <WizardPage
        title={"General"}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      >
        <GeneralForm
          generalRecipeData={generalRecipeDataLocal}
          generalRecipeErrors={generalRecipeErrors}
          setGeneralRecipeData={setGeneralRecipeData}
        />
      </WizardPage>
    </>
  );
}

export default GeneralPage;
