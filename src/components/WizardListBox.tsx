import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

type Props = {
  children?: React.ReactNode;
};

function WizardListBox({children} : Props) {
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      border={1}
      sx={{ padding: "1rem", borderColor: grey[300], overflowY: "scroll" }}
    >
      {children}
    </Box>
  );
}

export default WizardListBox;
