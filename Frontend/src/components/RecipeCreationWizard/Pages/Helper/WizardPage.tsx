import { Box, Button } from "@mui/material";
import { PageProps } from "../../../../types/types";

type Props = PageProps & {
  children?: React.ReactNode;
  nextButtonText?: string;
};

function WizardPage({ onNextPage, onPreviousPage, children, nextButtonText = "next" }: Props) {
  return (
    <Box height="100%" display={"flex"} flexDirection={"column"}>
      <Box flexGrow={1} paddingY={"3rem"} alignContent={"center"}>
        {children}
      </Box>
      <Box justifyContent={"space-between"} display={"flex"} flexShrink={0}>
        {onPreviousPage ? (
          <Button
            variant="outlined"
            size="medium"
            onClick={onPreviousPage}
            sx={{ minWidth: "7rem" }}
          >
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        <Button variant="contained" onClick={onNextPage} sx={{ minWidth: "7rem" }}>
          {nextButtonText}
        </Button>
      </Box>
    </Box>
  );
}

export default WizardPage;
