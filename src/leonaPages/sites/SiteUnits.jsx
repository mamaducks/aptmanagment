import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dateFormatter, phoneFormatter } from "../../formatters/cellFormatters";
import { SiteAddress } from "../../headers/SiteAddress";
import { tenantDialogInfo } from "../../state/dialogs";
import { useColumns } from "../../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";
import { UnitSummary } from "./UnitSummary";

export const getColumns = ({ setTenantDialogInfo }) => [
  { field: "unitId", headerName: "Unit", width: 100 },
  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 320,
  },
  {
    field: "phonePrimary",
    headerName: "Primary Phone #",
    valueFormatter: phoneFormatter,
    width: 180,
  },
  {
    field: "dateMoveIn",
    headerName: "Move In Date",
    valueFormatter: dateFormatter,
    width: 160,
  },
  {
    field: "dateLease",
    headerName: "Lease Date",
    valueFormatter: dateFormatter,
    width: 160,
  },
  {
    field: "dateRenewal",
    headerName: "Renewal Date",
    valueFormatter: dateFormatter,
    width: 160,
  },

  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 270,
    renderCell: ({ row }) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            disabled={!row.tenant}
            onClick={() => setTenantDialogInfo({ ...row, formType: "update" })}
          >
            Update Tenant
          </Button>

          <Button
            disabled={!row.tenant}
            onClick={() => setTenantDialogInfo({ ...row, formType: "moveout" })}
          >
            Move Out
          </Button>
        </Box>
      );
    },
  },
  {
    field: "actionsoo",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions Edit",
    width: 140,
    renderCell: ({ row }) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            color="primary"
            disabled={!row.tenant}
            href={`/sites/${row.siteId}/${row.unitId}/${row.applicantId}`}
          >
            Tenant Info
          </Button>
        </Box>
      );
    },
  },
];

export function SiteUnits() {
  const { siteId } = useParams();
  const setTenantDialogInfo = useSetRecoilState(tenantDialogInfo);

  const columnsToUse = useColumns(
    useMemo(() => getColumns({ setTenantDialogInfo }), [setTenantDialogInfo])
  );

  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const rowData = siteWithUnits.units.map((item) => ({ ...item, siteId }));
  console.log(rowData);
  return (
    <div style={{ height: 900, width: "100%" }}>
      <Stack sx={{ pr: 5 }}>
        <Box ml={2}>
          <Button href="/" startIcon={<ArrowBackIosIcon />} size="large">
            Back to All Sites
          </Button>

          <Box
            display="flex"
            ml={8}
            style={{ alignItems: "center", height: "100%", gap: 10 }}
          >
            <SiteAddress />
          </Box>
        </Box>

        <Stack justifyContent="flex-end">
          <UnitSummary />
        </Stack>
      </Stack>

      <Typography lineHeight={2} variant="h5" textAlign="center" pt={2}>
        Current Tenants
      </Typography>

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={rowData}
        columns={columnsToUse}
      />
    </div>
  );
}
