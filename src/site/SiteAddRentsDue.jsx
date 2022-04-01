import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currencyFormatter, dateFormatter } from "../formatters/cellFormatters";
import { month, year } from "../state/data/reference";
import { getDataUpdater } from "../state/helpers/dataHelpers";
import { rents } from "../state/rents";
import { getSiteWithTenantsSummaryInfo } from "../state/sites";
import { SiteHeader } from "./SiteHeader";

export const getColumns = () => [
  { field: "unitId", headerName: "Unit", width: 140 },

  {
    field: "applicantsName",
    headerName: "Tenant",
    width: 420,
  },
  {
    field: "lastRentDate",
    headerName: "Previous Rent Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "lastRentAmount",
    headerName: "Previous Rent Due",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "amount",
    headerName: "Rent Due",
    valueFormatter: currencyFormatter,
    width: 200,
    type: "number",
    editable: true,
  },
];

export function SiteAddRentsDue() {
  const { siteId } = useParams();
  const columns = getColumns();
  const setRentsState = useSetRecoilState(rents);
  const getRowId = (item) => item.unitId;

  const rows = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  const [rowData, setRowData] = useState([]);
  const [newRents, setNewRents] = useState([]);

  const handleCellChange = useCallback((params) => {
    setRowData((current) => getDataUpdater(getRowId)(current, params));
  }, []);

  const handleAddRents = useCallback(() => {
    setRentsState((current) => [...current, ...newRents]);
  }, [newRents, setRentsState]);

  useEffect(() => {
    setRowData(
      rows.units.map((item) => {
        const lastRent = item.rents?.[0];

        return {
          ...item,
          amount: lastRent?.amount,
          lastRentAmount: lastRent?.amount,
          lastRentDate: lastRent?.timestamp,
          siteId,
        };
      })
    );
  }, [rows, setRowData, siteId]);

  useEffect(() => {
    const timestamp = Date.now();

    setNewRents(
      compact(
        rowData.map(({ siteId, unitId, applicantId, amount }) => {
          if (!!amount && !!applicantId) {
            return {
              siteId,
              unitId,
              applicantId,
              amount: Number(amount),
              timestamp,
            };
          }

          return undefined;
        })
      )
    );
  }, [rowData]);

  console.log("gg", rowData);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <SiteHeader />

      <Button disabled={!newRents.length} onClick={handleAddRents}>
        Add Rents
      </Button>

      <Typography textAlign="center">
        Enter rents due for {month} {year}
      </Typography>

      <DataGrid
        getRowId={getRowId}
        rows={rowData}
        onCellEditCommit={handleCellChange}
        columns={columns}
        isCellEditable={({ row }) => !!row.tenant}
      />
    </div>
  );
}
