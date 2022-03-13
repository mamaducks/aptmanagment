import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useParams } from "react-router-dom";

import { getEmployeeInfo } from "../../../data/employeesAtoms";
import EditEmployeeDialog from "./EditEmployeeDialog";
import { EditEmployee } from "./EditEmployee";

export function EmployeeSheet({ employeeId }) {
  const employee = useRecoilValue(getEmployeeInfo(employeeId));
  console.log(employee, employeeId);
  //   const [imageList, setImageList] = useState([]);

  var fullName = employee.firstName + " " + employee.lastName;

  return (
    <>
      <Paper sx={{ p: "30px" }}>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>{fullName}</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>{employee.startDate}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" gap={4}>
          <Box sx={{ width: "500px" }}>
            <Typography>{employee.phone}</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>{employee.rate}</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "500px" }}>
            <Typography>{employee.employeeType}</Typography>
          </Box>
        <Box sx={{ width: "500px" }}>
          <Typography>lease date</Typography>
        </Box>
        <Box sx={{ width: "500px" }}>
          <Typography>lease renewal date</Typography>
        </Box>
        <Stack gap={1}>
          <Box sx={{ width: "500px" }}>
            <Typography>other tenant info?</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>maintenance to unit since move in date</Typography>
          </Box>
        </Stack>
        <Stack gap={1}>
          <Box sx={{ width: "500px" }}>
            <Typography>rent stuff for teneant</Typography>
          </Box>
          <Box sx={{ width: "500px" }}>
            <Typography>table of rents stuff info</Typography>
          </Box>
        </Stack>
        <EditEmployee employeeId={employeeId} />

        <div>print</div>
        <br />
      </Paper>
    </>
  );
}
