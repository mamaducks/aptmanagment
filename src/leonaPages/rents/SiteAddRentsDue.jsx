import { DataGrid } from "@mui/x-data-grid";
import { compact } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currencyFormatter, dateFormatter } from "../../formatters/cellFormatters";
import { ActionSubheader } from "../../headers/ActionSubheader";
import { getDataUpdater } from "../../state/helpers/dataHelpers";
import { useColumns } from "../../state/helpers/hooks";
import { rents } from "../../state/rents";
import { getSiteWithTenantsSummaryInfo } from "../../state/sites";


export const columns = [
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
    headerName: "Previous Rent Amount",
    valueFormatter: currencyFormatter,
    width: 200,
  },
  {
    field: "amount",
    headerName: "Enter Rent Due",
    valueFormatter: currencyFormatter,
    highlight: true,
    width: 200,
    type: "number",
    editable: true,
  },
];

export function SiteAddRentsDue() {
  const { siteId } = useParams();
  const columnsToUse = useColumns(columns);
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


  return (
    <div style={{ height: 1000, width: "100%" }}>
      <ActionSubheader
        title="rents"
        disabled={!newRents.length}
        handleClick={handleAddRents}
        label="Update Rents"
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
