import { Button, Stack, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

export function SiteButtonHeader({ title, href, label }) {
  return (
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
  );
}
