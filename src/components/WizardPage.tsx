import { Box, Button, Typography } from "@mui/material";

type TestWizardSiteProps = {
  backgroundColor: string;
  next: () => void;
  previous?: () => void;
  children?: React.ReactNode;
  title: string;
};

function WizardPage({ backgroundColor, next, previous, children, title }: TestWizardSiteProps) {
  return (
    <Box sx={{ height: "100%", width: "100%", backgroundColor: backgroundColor }}>
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
      <Box justifyContent={"space-between"} display={"flex"}>
        {previous ? (
          <Button variant="outlined" size="medium" onClick={previous} sx={{ minWidth: "7rem" }}>
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        <Button variant="contained" onClick={next} sx={{ minWidth: "7rem" }}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default WizardPage;
