import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { dateFormatter } from "../formatters/cellFormatters";
import { SiteHeader } from "./SiteHeader";
import { SiteAddress } from "./SiteAddress";
import { useColumns } from "../state/helpers/hooks";
import { Box, Button } from "@mui/material";


export const columns = [
  { field: "unitId", headerName: "Unit", width: 140 },
  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 320,
  },
  {
    field: "dateMoveIn",
    headerName: "Move In Date",
    valueFormatter: dateFormatter,
    width: 180,
  },
  {
    field: "dateLease",
    headerName: "Lease Date",
    valueFormatter: dateFormatter,
    width: 180,
  },
  {
    field: "dateRenewal",
    headerName: "Renewal Date",
    valueFormatter: dateFormatter,
    width: 180,
  },
  {
    field: "dateMoveOut",
    headerName: "Move Out Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "actions",
    headerAlign: "center",
    sortable: false,
    disableColumnMenu: true,
    headerName: "Actions",
    width: 420,
    renderCell: (cellValues) => {
      return (
        <Box display="flex" justifyContent="center" flexGrow={1}>
          <Button
            variant="contained"
            color="primary"
            // href={`/sites/${cellValues.row.siteId}/rents`}
          >
            Move Out Transfer
          </Button>
          <Button
            variant="contained"
            color="primary"
            // href={`/sites/${cellValues.row.siteId}/rents`}
          >
            Update Tenant
          </Button>
          
        </Box>
      );
    },
  },
  // {
  //   field: "actions",
  //   headerAlign: "center",
  //   sortable: false,
  //   disableColumnMenu: true,
  //   headerName: "Actions Edit",
  //   width: 300,
  //   renderCell: (cellValues) => {
  //     return (
  //       <Box display="flex" justifyContent="center" flexGrow={1}>
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           alignSelf="center"
  //           href={`/sites/${cellValues.row.siteId}/rents`}
  //         >
  //           Update Tenant
  //         </Button>
  //       </Box>
  //     );
  //   },
  // },
];

export function SiteUnits() {
  const { siteId } = useParams();
  const columnsToUse = useColumns(columns);
  const siteWithUnits = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />
      <SiteAddress />
      <Button
          variant="contained"
          color="primary"
        >
          Edit Site Info
        </Button>

      <DataGrid
        getRowId={(item) => item.unitId}
        rows={siteWithUnits.units}
        columns={columnsToUse}
      />
    </div>
  );
}
