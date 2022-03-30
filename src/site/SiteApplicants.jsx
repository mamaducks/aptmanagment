import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateTimeFormatter,
  phoneFormatter,
  uppercaseFormatter,
  referenceFormatter,
  yesNoFormatter,
} from "../formatters/cellFormatters";
import {
  applicantStatusData,
  APPLICANT_STATUS_MAP,
} from "../state/data/applicants";
import { useParams } from "react-router-dom";
import { getSiteWithApplicantsSummaryInfo } from "../state/sites";
import { useState, useMemo } from "react";
import { SiteHeader } from "./SiteHeader";
import { useColumns } from "../state/helpers/hooks";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { tenantDialogInfo } from "../state/dialogs";

export const getColumns = ({ setTenantDialogInfo }) => [
  {
    field: "applicantStatus",
    headerName: "Status",
    width: 100,
    valueFormatter: referenceFormatter(applicantStatusData),
  },
  {
    field: "dateApplied",
    headerName: "Date",
    valueFormatter: dateTimeFormatter,
    width: 180,
  },
  {
    field: "applicantsName",
    headerName: "Name",
    width: 240,
  },
  {
    field: "phonePrimary",
    headerName: "Phone",
    valueGetter: ({ row: { applicants = [] } }) =>
      compact(
        applicants
          .map((item) => [
            phoneFormatter({ value: item.phonePrimary }),
            phoneFormatter({ value: item.phoneSecondary }),
          ])
          .flat()
      ).join(", "),
    width: 150,
  },

  {
    field: "familySize",
    headerName: "Family Size",
    width: 80,
  },

  {
    field: "incomeLevel",
    headerName: "Income Level",
    valueFormatter: uppercaseFormatter,
    width: 80,
  },
  {
    field: "unitSizes",
    headerName: "Unit Size",
    valueGetter: ({ row: { unitSizes = [] } }) => unitSizes.join(", "),
    width: 100,
  },
  {
    field: "rentalAssistance",
    headerName: "Rental Assistance",
    valueFormatter: yesNoFormatter,
    width: 100,
  },
  {
    field: "accomodations",
    headerName: "Accomodataions",
    valueGetter: ({ row: { accomodations = [] } }) => accomodations.join(", "),
    valueFormatter: uppercaseFormatter,
    width: 180,
  },
  {
    field: "notes",
    headerName: "Notes",
    valueFormatter: uppercaseFormatter,
    width: 200,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 300,
    renderCell: ({ row }) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/forms/applicant/${row.applicantId}`}>Update</Button>

          <Button
            disabled={row.applicantStatus !== APPLICANT_STATUS_MAP.Applied}
            onClick={() => setTenantDialogInfo(row)}
          >
            Move In
          </Button>
        </Box>
      );
    },
  },
];

export function SiteApplicants() {
  const { siteId } = useParams();
  const setTenantDialogInfo = useSetRecoilState(tenantDialogInfo);

  const [statusFilters, setStatusFilters] = useState([
    APPLICANT_STATUS_MAP.Applied,
  ]);

  const { applicants } = useRecoilValue(
    getSiteWithApplicantsSummaryInfo(siteId)
  );

  const columnsToUse = useColumns(
    useMemo(() => getColumns({ setTenantDialogInfo }), [setTenantDialogInfo])
  );

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Stack justifyContent="flex-end">
        <Button href="/forms/applicant/">Add New Applicant</Button>
      </Stack>

      <Stack direction="column" m={2}>
        <SiteHeader />
        <FormControl>
          <FormLabel>Application Status</FormLabel>

          <ToggleButtonGroup
            value={statusFilters}
            onChange={(_, newStatus) => {
              setStatusFilters(newStatus);
            }}
          >
            {applicantStatusData.map(({ value, label }) => (
              <ToggleButton key={value} value={value}>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </FormControl>
      </Stack>

      <DataGrid
        getRowId={(item) => item.applicantId}
        rows={applicants
          .map((item) => ({ ...item, siteId }))
          .filter((item) => statusFilters.includes(item.applicantStatus))}
        columns={columnsToUse}
      />
    </div>
  );
}
