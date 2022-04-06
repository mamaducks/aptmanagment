import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currencyFormatter,
  dateFormatter,
} from "../../formatters/cellFormatters";
import { ActionSubheader } from "../../headers/ActionSubheader";
import { getDataUpdater } from "../../state/helpers/dataHelpers";
import { useColumns } from "../../state/helpers/hooks";
import { payments } from "../../state/payments";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";

export const columns = [
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
    headerName: "Payment Amount",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "amount",
    headerName: "Enter Payments",
    valueFormatter: currencyFormatter,
    width: 200,
    type: "number",
    highlight: true,
    editable: true,
  },
];

export function SiteAddPaymentsMade() {
  const { siteId } = useParams();
  // const columns = getColumns();
  const columnsToUse = useColumns(columns);

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

  return (
    <div style={{ height: 1000, width: "100%" }}>
      <ActionSubheader
        title="Payments"
        disabled={!newPayments.length}
        handleClick={handleAddPayments}
        label="Enter Payments"
      />

      <DataGrid
        getRowId={getRowId}
        rows={rowData}
        onCellEditCommit={handleCellChange}
        columns={columnsToUse}
        isCellEditable={({ row }) => !!row.tenant}
      />
    </div>
  );
}
