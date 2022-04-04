import { DataGrid } from "@mui/x-data-grid";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { getEmployeeSummaryInfo } from "../../state/employees";
import {
  dateFormatter,
  referenceArrayFormatter,
} from "../../formatters/cellFormatters";
import { employeeRoleData } from "../../state/data/employees";
import { fullNameValueGetter } from "../../formatters/valueGetters";
import { useColumns } from "../../state/helpers/hooks";
import { Box, Button, Stack, Typography } from "@mui/material";
import { employeeDialogInfo } from "../../state/dialogs";
import { useMemo } from "react";
import { SiteButtonHeader } from "../../headers/SiteButtonHeader";

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
