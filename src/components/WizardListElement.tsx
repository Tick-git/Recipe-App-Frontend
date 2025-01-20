import { Box, Button, ButtonProps } from "@mui/material";

type Props = {
  onClick: () => void;
  buttonColor: ButtonProps["color"];
  buttonText: string;
  children?: React.ReactNode;
};

function WizardListElement({ onClick, buttonColor, children, buttonText }: Props) {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      {children}
      <Box alignContent={"center"}>
        <Button variant="outlined" onClick={onClick} color={buttonColor} sx={{ flex: 0.2 }}>
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}

export default WizardListElement;
