import { useState } from "react";
import WizardPage from "./Helper/WizardPage";
import { GeneralRecipeData, PageProps } from "../../../types/types";
import GeneralForm from "./General/GeneralForm";
import useGeneralRecipeValidation from "../../../hooks/useGeneralRecipeValidation";

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

  const { generalRecipeErrors, dataIsValid } = useGeneralRecipeValidation();

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
      <WizardPage onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
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
