import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import AddBoxIcon from "@mui/icons-material/AddBox";

export function AddIconButton({ title, href, label }) {
  return (
      <Box ml={3}>
        <Button href="/" startIcon={<ArrowBackIosIcon />}>
          Back to Dashboard
        </Button>
      
      <Stack sx={{ pl: 5, alignItems: "flex-end" }}>
        <Typography variant="h5"> {title} </Typography>
        <Button
          size="large"
          href={href}
          startIcon={<AddBoxIcon />}
          sx={{ textDecoration: "none" }}
        >
          {label}
        </Button>
      </Stack>
      </Box>
  );
}
