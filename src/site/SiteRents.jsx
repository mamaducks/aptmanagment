import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getAllUnitRentTotals } from "../data/rentsAtom";
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Box } from "@mui/material";

export const columns = [
  {
    field: "id",
    headerName: "Unit",
    width: 180,
  },
  {
    field: "tenant",
    headerName: "Tenant",
    width: 330,
    valueGetter: ({ row }) =>
      `${row.tenant?.firstName || ""} ${row.tenant?.lastName || ""}`,
  },
  {
    field: "rent",
    headerName: "Rent",
    valueGetter: ({ row }) => row.totals.rentsTotal,
    width: 180,
  },
  {
    field: "amount",
    headerName: "Paid",
    valueGetter: ({ row }) => row.totals.paymentsTotal,
    width: 180,
  },
  {
    field: "totalSummary",
    valueGetter: ({ row }) => row.totals.totalSummary,
    headerName: "Balance",
    width: 180,
  },
];

export function SiteRents() {
  const { siteId } = useParams();

  const rowData = useRecoilValue(getAllUnitRentTotals(siteId));

  return (
    <>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          getRowId={(item) => item.id}
          rows={rowData}
          columns={columns}
        />
      </div>
<Box display="flex" justifyContent="center">

   <List
        sx={{
          width: "100%",
          maxWidth: 550,
          bgcolor: "background.paper",
          textAlign: "center",
          alignSelf: "center",
        }}
        subheader={<ListSubheader>{rowData.siteName}Site Totals</ListSubheader>}
      >
        <ListItem>
          <ListItemText id="rentTotalLabel" primary="Total Rents Entered" />
          <ListItemText
            id="rent-total"
            primary="$$"
            sx={{ justifyContent: "end", display: "flex" }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            id="depositTotalLabel"
            primary="Total Deposits Entered"
          />
          <ListItemText
            id="depositTotal"
            primary="$$"
            sx={{ justifyContent: "end", display: "flex" }}
          />
        </ListItem>
      </List>

</Box>
     
    </>
  );
}
