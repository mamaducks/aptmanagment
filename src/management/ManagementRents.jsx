import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getSiteRentsSummaryInfo } from "../state/rents";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  negative: { color: "red" },
  positive: { color: "green" },
}));

export const getColumns = ({ negative, positive }) => [
  { field: "siteName", headerName: "Site", width: 320 },
  {
    field: "rentsTotal",
    headerName: "Rents Total",
    width: 240,
  },
  {
    field: "paymentsTotal",
    headerName: "Payments Total",
    width: 200,
  },
  {
    field: "creditsTotal",
    headerName: "Credits Total",
    width: 200,
  },
  {
    field: "delinquentTotal",
    headerName: "Delinquencies Total",
    width: 200,
  },
  {
    field: "totalSummary",
    headerName: "Total ",
    cellClassName: ({ value }) => (value >= 0 ? positive : negative),
    width: 200,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            variant="contained"
            color="primary"
            alignSelf="center"
            href={`/sites/${cellValues.row.siteId}/rents`}
          >
            View Rents Info
          </Button>
        </Box>
      );
    },
  },
];

export function ManagementRents() {
  const styles = useStyles();
  const columns = getColumns(styles);
  const rowData = useRecoilValue(getSiteRentsSummaryInfo);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        getRowId={(item) => item.siteId}
        rows={rowData}
        columns={columns}
      />
    </div>
  );
}
