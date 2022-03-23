import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
// import NewTenantDialog from "../../unused/MoveInDialog";
import EditTenantDialog from "./UpdateTenants/EditTenantDialog";

// import TenantTable from "./Table";
import RenewTable from "../../unused/TenantRenewals";
import { TenantSheet } from "../../App/ViewSheets/TenantSheet";
import TenantTable from "../../unused/Table";
import { TenantGrid } from "../../App/Grids/TenantGrid"
// import { EnterTenant } from "./TenantfromApplicant";

export function Tenants() {
  return (
    <>
      <Box
      sx={{
        display: "flex",
        // flexDirection: 'column',
        justifyContent: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{gap: 3}}> */}
      {/* <NewTenantDialog /> */}
      {/* <EditTenantDialog /> */}
      {/* <SearchTenantDialog /> */}
      {/* </ButtonGroup> */}
    </Box>
      <div>header: Tenants</div>
      By Site
      sorted by renewal date
      {/* <TenantTable /> */}

      <TenantGrid />

      <TenantSheet />
      <div>tenants renewing soon update tenant</div>
      {/* <RenewTable /> */}
    </>
  );
}
