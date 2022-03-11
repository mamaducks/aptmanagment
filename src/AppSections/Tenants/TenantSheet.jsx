import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import UpdateTenantDialog from "./UpdateTenantDialog";

export function TenantSheet() {
  return (
    <>

      <Paper sx={{ p: "30px" }}>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>Tenant Name</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>move in date</Typography>
          </Box>
        </Stack>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>site</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>unit #</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "500px" }}>
          <Typography>lease date</Typography>
        </Box>
        <Box sx={{ width: "500px" }}>
          <Typography>lease renewal date</Typography>
        </Box>
        <Stack  gap={1}>
          <Box sx={{ width: "500px" }}>
            <Typography>other tenant info?</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>maintenance to unit since move in date</Typography>
          </Box>
        </Stack>
        <Stack  gap={1}>
          <Box sx={{ width: "500px" }}>
            <Typography>rent stuff for teneant</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>table of rents stuff info</Typography>
          </Box>
        </Stack>
        
        <div>print</div>
        <br />
        <UpdateTenantDialog />
      </Paper>

   
    </>
  );
}



