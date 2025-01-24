import { Box, SxProps, Typography } from "@mui/material";

type Props = {
  label: string;
  value: string;
  sxParent?: SxProps;
};

function LabelWithValue({ label, value, sxParent }: Props) {
  return (
    <Box display={"flex"} flexDirection={"row"} sx={sxParent}>
      <Box width={"20%"}>
        <Typography textAlign={"right"}>{label}</Typography>
      </Box>
      <Box ml={"2rem"} width={"80%"}>
        <Typography style={{ whiteSpace: "normal", wordBreak: "break-word" }}>{value}</Typography>
      </Box>
      <Box ml={"3rem"}></Box>
    </Box>
  );
}

export default LabelWithValue;
