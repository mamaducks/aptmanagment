import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currencyFormatter, dateFormatter } from "../formatters/cellFormatters";
import { month, year } from "../state/data/reference";
import { getDataUpdater } from "../state/helpers/dataHelpers";
import { payments } from "../state/payments";
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
    field: "lastPaymentDate",
    headerName: "Previous Payment Date",
    valueFormatter: dateFormatter,
    width: 200,
  },
  {
    field: "lastPaymentAmount",
    headerName: "Previous Payment Due",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "amount",
    headerName: "Enter Payments",
    valueFormatter: currencyFormatter,
    width: 200,
    type: "number",
    editable: true,
  },
];

export function SiteAddPaymentsMade() {
  const { siteId } = useParams();
  const columns = getColumns();
  const setPaymentState = useSetRecoilState(payments);
  const getRowId = (item) => item.unitId;

  const rows = useRecoilValue(getSiteWithTenantsSummaryInfo(siteId));
  const [rowData, setRowData] = useState([]);
  const [newPayments, setNewPayments] = useState([]);

  const handleCellChange = useCallback((params) => {
    setRowData((current) => getDataUpdater(getRowId)(current, params));
  }, []);

  const handleAddPayments = useCallback(() => {
    setPaymentState((current) => [...current, ...newPayments]);
  }, [newPayments, setPaymentState]);

  useEffect(() => {
    setRowData(
      rows.units.map((item) => {
        const lastPayment = item.payments?.[0];

        return {
          ...item,
          amount: lastPayment?.amount,
          lastPaymentAmount: lastPayment?.amount,
          lastPaymentDate: lastPayment?.timestamp,
          siteId,
        };
      })
    );
  }, [rows, setRowData, siteId]);

  useEffect(() => {
    const timestamp = Date.now();

    setNewPayments(
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

      <Button disabled={!newPayments.length} onClick={handleAddPayments}>
        Add Payments
      </Button>

      <Typography textAlign="center">
        Enter Payments due for {month} {year}
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
