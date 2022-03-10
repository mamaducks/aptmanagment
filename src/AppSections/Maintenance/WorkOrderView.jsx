import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function WorkOrderView() {
  return (
    <>
      <div>Work order view</div>
      <Paper sx={{ p: "30px" }}>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>date</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>order #</Typography>
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
            <Typography>Tenant</Typography>
          </Box>
        <Box sx={{ width: "500px" }}>
          <Typography>work requested</Typography>
        </Box>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>list parts</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>the costs of parts</Typography>
          </Box>
        </Stack>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>enployees worked</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>list hours</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "500px" }}>
            <Typography>totals</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>enter Remarks</Typography>
          </Box>
          <div>print</div>
      </Paper>

    
    

      <>
        <div>Site 12</div>
        <div>Unit 449</div>
        <div>Creator 5</div>
        <div>Assignee 6</div>
        <div>Occupant David Smith</div>
        <div>Work requested * Fix something</div>
        <div>Remarks</div>
        <div>3 Gloves 3 Painting Supplies</div>
        <div>print</div>
      </>
    </>
  );
}
