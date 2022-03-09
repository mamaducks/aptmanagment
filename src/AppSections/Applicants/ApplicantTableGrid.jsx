import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from "recoil";
import { applicantListState } from "../../data/applicantAtoms";

const columns = [

//   { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'dateApplied',
    headerName: 'Date Applied',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone #',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'familySize',
    headerName: 'Family Size',
    type: 'number',
    width: 110,
    editable: true,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export default function DataGridDemo() {
    const applicantList = useRecoilState(applicantListState);


  return (
    <div style={{ height: 400, width: '100%' }}>
        {applicantList.map((item, id) => (
 <DataGrid
 getRowId={(row) => id}
        rows={   [item.id,  item.dateApplied, item.name, item.phone, item.familySize]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

        ))}
     
    </div>
  );
}