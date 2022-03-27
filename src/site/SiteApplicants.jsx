import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useRecoilValue } from "recoil";
import {
  dateTimeFormatter,
  phoneFormatter,
  uppercaseFormatter,
  referenceFormatter,
  yesNoFormatter,
} from "../formatters/cellFormatters";
import { fullNameValueGetter } from "../formatters/valueGetters";
import { applicantStatusData } from "../state/data/applicants";
import { useParams } from "react-router-dom";
import { getSiteWithApplicantsSummaryInfo } from "../state/sites";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SiteHeader } from "./SiteHeader";

export const columns = [
  {
    field: "applicantStatus",
    headerName: "Status",
    width: 120,
    valueFormatter: referenceFormatter(applicantStatusData),
  },
  {
    field: "dateApplied",
    headerName: "Date",
    valueFormatter: dateTimeFormatter,
    width: 190,
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
    field: "race",
    headerName: "Race",
    valueGetter: ({ row: { applicants = [] } }) =>
      applicants
        .map(({ ethnicity, race }) => `${race || ""}${ethnicity || ""}`)
        .join(", "),
    valueFormatter: uppercaseFormatter,
    width: 80,
  },
  {
    field: "familySize",
    headerName: "Family Size",
    width: 80,
  },
  {
    field: "gender",
    headerName: "M/F",
    valueGetter: ({ row: { applicants = [] } }) =>
      applicants.map(({ gender }) => gender).join(", "),
    valueFormatter: uppercaseFormatter,
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
];

export function SiteApplicants() {
  const { siteId } = useParams();
  const [statusFilters, setStatusFilters] = useState(["a"]);

  const { applicants } = useRecoilValue(
    getSiteWithApplicantsSummaryInfo(siteId)
  );

  console.log(applicants);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

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

      <DataGrid
        getRowId={(item) => item.applicantId}
        rows={applicants.filter((item) =>
          statusFilters.includes(item.applicantStatus)
        )}
        columns={columns}
      />
    </div>
  );
}
