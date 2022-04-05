import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export function RowHeader({ label }) {
  return (
    <>
      <Box ml={3}>
        <Button href="/" startIcon={<ArrowBackIosIcon />}>
          Back to Dashboard
        </Button>
      </Box>

      <Typography textAlign="center" variant="h5" lineHeight={2}>
        {label}
      </Typography>
    </>
  );
}
