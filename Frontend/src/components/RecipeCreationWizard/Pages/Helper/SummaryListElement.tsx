import { Box, Divider, Typography } from "@mui/material";

type Props = {
  title: string;
  children?: React.ReactNode;
};

function SummaryListElement({ title, children }: Props) {
  return (
    <Box>
      <Box paddingX={"1rem"} marginBottom={"1.7rem"}>
        <Typography fontWeight={"bold"} variant="h6">
          {title}
        </Typography>
        <Divider />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default SummaryListElement;
