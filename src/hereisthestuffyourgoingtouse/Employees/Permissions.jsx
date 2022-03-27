import { Box, Typography } from "@mui/material";

export function Permissions() {
  return (
    <>
      <div>do permissions based on employment types</div>
      <div>Admin -all</div>
      <div>Maintenance - work orders edit view </div>
      <div>maintenance manager - bills all work orders stuff</div>
      <div>
        office manager - rent stuff bills stuff, applicant?, tenant move in
        stuff, maybe work order stuff
      </div>
      <div>
        site manager - rent stuff based on site choices, bills stuff? workorder
        stuff, applicants stuff and tenant stuff based on site choices
      </div>
      <div>checkboxes for sites managing</div>
      <div>maintenance supervisor - all work order stuff</div>
    </>
  );
}

export function EmployeeTypePermissions() {
  return (
    <>
      <Box>
        <Typography id="adminPermissions">All Permissions</Typography>
      </Box>
      <Box>
        <Typography id="maintenanceManagerPermissions">
          work orders edit add view bills maintenance permissions
         Access to all Sites work Orders

           hide rents page 
           hide  management page
           hide applicants page
          hide tenants page
        </Typography>
      
      </Box>
      
      <Box>
        <Typography id="maintenancePermissions">
          work orders add edit view
          site Permissions

          hide rents page 
          hide management page
          hide billsdialog
          hide applicants page
          hide tenants page

        </Typography>
      </Box>
      <Box>
        <Typography id="officeManagerPermissions">
          rent stuff bills stuff, applicant?, tenant move in stuff, add work
          order 
          site Permissions


        </Typography>
      </Box>
      <Box>
        <Typography id="siteManagerPermissions">
          rent stuff based on site choices, bills stuff? workorder stuff,
          applicants stuff and tenant stuff based on site choices{" "}
          site Permissions
        </Typography>
      </Box>
      <Box>
        <Typography id="maintenanceSupervisorPermissions">
          all work order stuff{" "}
          site Permissions

          hide rents page
          hide applicants page
          hide tenants page
        </Typography>
      </Box>
    </>
  );


}
