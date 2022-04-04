import { month, year } from "../state/data/reference";
import { Button, Stack, Typography } from "@mui/material";

export function ActionSubheader({ title, disabled, handleClick, label }) {
  return (
    <Stack justifyContent="flex-end" py={3} pr={1}>
      <Typography variant="body1" alignSelf="flex-end">
        Enter {title} due for {month} {year}
      </Typography>
      <Button
        disabled={disabled}
        onClick={handleClick}
        size="large"
        variant="contained"
        sx={{ textDecoration: "none" }}
      >
        {label}
      </Button>
    </Stack>
  );
}
