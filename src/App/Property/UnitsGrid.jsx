import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { getUnitsInfo } from "../../data/unitsAtom";


const handleClick = (e, cellValues ) => {
    console.log(cellValues.row);
}


export const columns = [
  { field: 'number', headerName: 'Unit', width: 320 },
  { field: 'tenant?.name', headerName: 'tenant name', width: 190 },
  { field: 'tenant?.dateLease', headerName: 'vacant', width: 130 },
//   { field: 'totalFilledNum', headerName: 'lease date', width: 80 },
//   { field: 'name', headerName: 'renewal date', width: 150 },
//   { field: 'phone', headerName: 'Phone', width: 150 },
  {
    field: "view maintenance to unit",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleClick(e, cellValues);
          }}
        >
          View Units Info
        </Button>
      );
    }
  }

//   { field: 'totalFilledNum', headerName: 'Filled', width: 80 },
//   { field: 'name', headerName: 'Name', width: 150 },
//   { field: 'phone', headerName: 'Phone', width: 150 },
//   { field: 'race', headerName: 'Race', width: 80 },
//   { field: 'gender', headerName: 'M/F', width: 80 },
//   { field: 'familySize', headerName: 'Family Size', width: 120 },
//   { field: 'incomeLevel', headerName: 'Income Level', width: 120 },
//   { field: 'unitSize', headerName: 'Unit Size', width: 80 },
//   { field: 'rentalAssistance', headerName: 'Rental Assistance', width: 120 },
];



export function UnitsGrid() {
  const rowData = useRecoilValue(getUnitsInfo);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid getRowId={(item) => item.siteId} rows={rowData} columns={columns} />
    </div>
  );
}