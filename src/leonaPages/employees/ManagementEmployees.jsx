import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateFormatter,
  referenceArrayFormatter
} from "../../formatters/cellFormatters";
import { fullNameValueGetter } from "../../formatters/valueGetters";
import { SiteButtonHeader } from "../../headers/SiteButtonHeader";
import { employeeRoleData } from "../../state/data/employees";
import { employeeDialogInfo } from "../../state/dialogs";
import { getEmployeeSummaryInfo } from "../../state/employees";
import { useColumns } from "../../state/helpers/hooks";


export const getColumns = ({ setEmployeeDialogInfo }) => [
  {
    field: "fullName",
    headerName: "Employee Name",
    valueGetter: fullNameValueGetter,
    width: 300,
  },
  {
    field: "phoneNumber",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Phone Number",
    width: 180,
  },
  {
    field: "roles",
    headerName: "Employee Roles",
    width: 350,
    valueGetter: ({ row: { roles = [] } }) =>
      referenceArrayFormatter(employeeRoleData)({ value: roles }),
  },
  {
    field: "hireDate",
    headerName: "Start Date",
    width: 180,
    valueFormatter: dateFormatter,
  },

  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 420,
    renderCell: ({ row }) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button onClick={() => setEmployeeDialogInfo(row)}>
            Update Employee
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementEmployees() {
  const setEmployeeDialogInfo = useSetRecoilState(employeeDialogInfo);

  const columnsToUse = useColumns(
    useMemo(
      () => getColumns({ setEmployeeDialogInfo }),
      [setEmployeeDialogInfo]
    )
  );
  const rowData = useRecoilValue(getEmployeeSummaryInfo);

  return (
    <>
   <Button href="/" startIcon={<ArrowBackIosIcon />}>
            Back to All Sites
          </Button>      <SiteButtonHeader
        title="Employees"
        href="/forms/employee"
        label="Add New Employee"
      />

      <div style={{ height: 900, width: "100%" }}>
        <DataGrid
          getRowId={(item) => item.employeeId}
          rows={rowData}
          columns={columnsToUse}
        />
      </div>
    </>
  );
}
