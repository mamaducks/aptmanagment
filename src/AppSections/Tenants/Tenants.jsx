import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
// import NewTenantDialog from "../../unused/MoveInDialog";
import EditTenantDialog from "./UpdateTenants/EditTenantDialog";
import SearchTenantDialog from "./SearchTenantDialog";

// import TenantTable from "./Table";
import RenewTable from "./UpdateTenants/TenantRenewals";
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
      <EditTenantDialog />
      <SearchTenantDialog />
      {/* </ButtonGroup> */}
    </Box>
      <div>header: Tenants</div>
      By Site
      {/* <TenantTable /> */}

      
      <div>tenants renewing soon update tenant</div>
      <RenewTable />
    </>
  );
}
