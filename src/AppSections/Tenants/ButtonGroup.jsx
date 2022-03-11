import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import NewTenantDialog from "./MoveInDialog";
import EditTenantDialog from "./EditTenantDialog";
import SearchTenantDialog from "./SearchTenantDialog";

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: 'column',
        justifyContent: "center",
        gap: 1,
        "& > *": {
          m: 1,
        },
      }}
    >
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{gap: 3}}> */}
      <NewTenantDialog />
      <EditTenantDialog />
      <SearchTenantDialog />
      {/* </ButtonGroup> */}
    </Box>
  );
}
