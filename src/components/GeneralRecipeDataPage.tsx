import { useState } from "react";
import { GeneralRecipeData, GeneralRecipeDataForm } from "./GeneralRecipeDataForm";
import WizardPage from "./WizardPage";

export type PageProps = {
  onNextPage: () => void;
  onPreviousPage?: () => void;
  title: string;
};

export type GeneralRecipeErrors = {
  name: { hasError: boolean; message: string };
  author: { hasError: boolean; message: string };
  time: { hasError: boolean; message: string };
};

type GeneralRecipeDataPageProps = {
  pageProps: PageProps;
  generalRecipeData: GeneralRecipeData;
  changeGeneralRecipeData: (data: GeneralRecipeData) => void;
};

function GeneralRecipeDataPage({
  pageProps: { onNextPage, onPreviousPage, title },
  generalRecipeData,
  changeGeneralRecipeData,
}: GeneralRecipeDataPageProps) {
  const [generalRecipeDataLocal, setGeneralRecipeData] =
    useState<GeneralRecipeData>(generalRecipeData);

  const [generalRecipeErrors, setGeneralRecipeErrors] = useState<GeneralRecipeErrors>({
    name: { hasError: false, message: "" },
    author: { hasError: false, message: "" },
    time: { hasError: false, message: "" },
  });

  function generalRecipeDataisValid(data: GeneralRecipeData): boolean {
    const errors: GeneralRecipeErrors = {
      name: { hasError: false, message: "" },
      author: { hasError: false, message: "" },
      time: { hasError: false, message: "" },
    };

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

  function onSubmit() {
    if (!generalRecipeDataisValid(generalRecipeDataLocal)) {
      return;
    }

    changeGeneralRecipeData(generalRecipeDataLocal);

    onNextPage();
  }

  return (
    <>
      <WizardPage title={title} backgroundColor="white" next={onSubmit} previous={onPreviousPage}>
        <GeneralRecipeDataForm
          generalRecipeData={generalRecipeDataLocal}
          generalRecipeErrors={generalRecipeErrors}
          setGeneralRecipeData={setGeneralRecipeData}
        />
      </WizardPage>
    </>
  );
}

export default GeneralRecipeDataPage;
