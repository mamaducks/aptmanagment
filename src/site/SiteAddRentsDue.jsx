import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useColumns } from "../state/helpers/hooks";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { SiteHeader } from "./SiteHeader";
import { currencyFormatter } from "../formatters/cellFormatters";
import { Box, Button } from "@mui/material";
import { useMemo, useState, useCallback } from "react";
import { paymentDialogInfo } from "../state/dialogs";
import { replaceItemAtIndex, updateState } from "../state/helpers/dataHelpers";

export const getColumns = ({ updateRow }) => [
  { field: "unitId", headerName: "Unit", width: 140 },

  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 420,
  },
  {
    field: "lastRent",
    headerName: "Last Rent Due",
    valueFormatter: currencyFormatter,
    valueGetter: ({ row }) => {
      console.log("sdfsdf", { row });
      return row.rents?.[0]?.amount;
    },
    width: 200,
  },
  {
    field: "amount",
    headerName: "Rent Due",
    valueFormatter: currencyFormatter,
    valueSetter: ({ row, value }) => {
      console.log("sdfsdf", { row, value });
      return { ...row, amount: value };
    },
    width: 200,
    editable: true,
  },
];

function getDataUpdater(idGetter) {
  return (items, { id, field, value }) => {
    const existing = items.find((item) => idGetter(item) === id);

    return updateState(
      items,
      (item) => idGetter(item) === id,
      { ...existing, [field]: value },
      false
    );
  };
}

export function SiteAddRentsDue() {
  const { siteId } = useParams();
  const columns = getColumns({ updateRow: () => {} });
  const rows = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));

  const [rowData, setRowData] = useState(
    rows.units.map((item) => ({ ...item, siteId }))
  );

  const getRowId = (item) => item.unitId;

  const handleCellChange = useCallback((params) => {
    setRowData((current) => getDataUpdater(getRowId)(current, params));
  }, []);

  console.log(rowData);
  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

      <Button
        onClick={() => {
          //   console.log(apiRef.current);
        }}
      >
        Update
      </Button>

      <DataGrid
        getRowId={getRowId}
        rows={rowData}
        onCellEditCommit={handleCellChange}
        columns={columns}
      />
    </div>
  );
}
