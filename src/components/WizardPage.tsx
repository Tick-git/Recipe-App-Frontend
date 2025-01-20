import { Box, Button, Typography } from "@mui/material";
import { PageProps } from "../types/types";

type Props = PageProps & {
  children?: React.ReactNode;
  title: string;
};

function WizardPage({ onNextPage, onPreviousPage, children, title }: Props) {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Box alignItems={"center"} height={"10%"} display={"flex"} sx={{ paddingY: "2.5rem" }}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box
        justifyContent={"center"}
        flexDirection={"column"}
        flexGrow={1}
        display={"flex"}
        height={"70%"}
      >
        {children}
      </Box>
      <Box justifyContent={"space-between"} display={"flex"} sx={{ marginTop: "1rem" }}>
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
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default WizardPage;
