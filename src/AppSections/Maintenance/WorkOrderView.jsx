import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { getWorkOrderInfo } from "../../data/workOrderAtoms";


export function WorkOrderView({workOrderId}) {
  const workOrder = useRecoilValue(getWorkOrderInfo(workOrderId));
  return (
    <>
      <div>Work order view</div>
      <div>use date or site to search maybe order # too</div>
      <div>checkboxes maybe in workorders choose to print click print takes to preview</div>

      <Paper sx={{ p: "30px" }}>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>{workOrder.dateRequest}</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>{workOrder.workOrderId}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>{workOrder.site}</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>{workOrder.unit}</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>{workOrder.phone}</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "500px" }}>
          <Typography>{workOrder.tenant}</Typography>
        </Box>
        <Box sx={{ width: "500px" }}>
          <Typography>{workOrder.request}</Typography>
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
