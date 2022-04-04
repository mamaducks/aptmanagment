import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dateTimeFormatter,
  phoneFormatter,
  referenceFormatter,
  uppercaseFormatter,
  yesNoFormatter,
} from "../../formatters/cellFormatters";
import {
  applicantStatusData,
  APPLICANT_STATUS_MAP,
} from "../../state/data/applicants";
import { tenantDialogInfo } from "../../state/dialogs";
import { useColumns } from "../../state/helpers/hooks";
import { getSiteWithApplicantsSummaryInfo } from "../../state/sites";
import { SiteHeader } from "../../headers/SiteHeader";

export const getColumns = ({ setTenantDialogInfo }) => [
  {
    field: "applicantStatus",
    headerName: "Status",
    width: 80,
    valueFormatter: referenceFormatter(applicantStatusData),
  },
  {
    field: "dateApplied",
    headerName: "Date",
    valueFormatter: dateTimeFormatter,
    width: 160,
  },
  {
    field: "applicantsName",
    headerName: "Name",
    width: 200,
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
    width: 140,
  },

  {
    field: "familySize",
    headerName: "Family Size",
    width: 70,
  },

  {
    field: "incomeLevel",
    headerName: "Income Level",
    valueFormatter: uppercaseFormatter,
    width: 70,
  },
  {
    field: "unitSizes",
    headerName: "Unit Size",
    valueGetter: ({ row: { unitSizes = [] } }) => unitSizes.join(", "),
    width: 70,
  },
  {
    field: "rentalAssistance",
    headerName: "Rental Assistance",
    valueFormatter: yesNoFormatter,
    width: 70,
  },
  {
    field: "accomodations",
    headerName: "Accomodataions",
    valueGetter: ({ row: { accomodations = [] } }) => accomodations.join(", "),
    valueFormatter: uppercaseFormatter,
    width: 160,
  },
  {
    field: "notes",
    headerName: "Notes",
    valueFormatter: uppercaseFormatter,
    width: 160,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 280,
    renderCell: ({ row }) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button href={`/forms/applicant/${row.applicantId}`}>Update</Button>

          <Button
            disabled={row.applicantStatus !== APPLICANT_STATUS_MAP.Applied}
            onClick={() => setTenantDialogInfo({ ...row, formType: "movein" })}
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
    <div style={{ height: 900, width: "100%" }}>
      <Stack direction="column" m={2}>
        <Stack>
          <SiteHeader />
          <Button href="/applicants" startIcon={<ArrowBackIosIcon />}>
            Back to All Sites
          </Button>
        </Stack>

        <Stack>
          <FormControl>
            <FormLabel>Sort By Application Status</FormLabel>

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
          <Button
            size="large"
            href="/forms/applicant/"
            startIcon={<AddBoxIcon />}
            sx={{ textDecoration: "none", alignSelf: "flex-end" }}
          >
            Add New Applicant
          </Button>
        </Stack>
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
