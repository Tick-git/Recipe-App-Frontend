import { useState } from "react";
import { GeneralRecipeData, GeneralRecipeFormErrors } from "../types/types";
import WizardPage from "./WizardPage";
import { PageProps } from "../types/types";
import GeneralForm from "./GeneralForm";
import { generalRecipeFormErrorsUtil } from "../util/util";

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
      <WizardPage title={"General"} onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
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
