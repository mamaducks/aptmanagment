// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { allWorkOrders } from "../../data/workOrderAtoms";
// import {getAllHours} from "../../data/workOrderHoursAtoms";
// import {getAllParts, getPartsInfo, getWorkOrderParts} from "../../data/partsAtom";
// import {
//   RecoilRoot,
//   atom,
//   selector,
//   useRecoilState,
//   useRecoilValue,
// } from "recoil";
// import WorkOrdersDialog from "./WorkOrderViewDialog";

// export function SiteWorkOrderTable() {
//   const workOrderList = useRecoilValue(allWorkOrders);
//   const hours = useRecoilValue(getAllHours);
//   const partPrice = useRecoilValue(getAllParts);

//     return (
//       <>
//         <div>total maintenance hours billed : WorkHoursBill</div>
  
//         <div>Maintenance Work Orders </div>
//         <div>categorized by site</div>
//         <div> on maintenace dash overview or </div>
//         <div>choose site start typing or choose from dropdown </div>
//         <div>have view all current month / recent months</div>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{fontWeight: "bolder"}}>work order #</TableCell>
//                 <TableCell align="right" sx={{fontWeight: "bolder"}}>hours billed</TableCell>
//                 <TableCell align="right" sx={{fontWeight: "bolder"}}>parts total</TableCell>
//                 <TableCell align="right" sx={{fontWeight: "bolder"}}>total billed</TableCell>
//                 <TableCell align="right" sx={{fontWeight: "bolder"}}>Current</TableCell>
//                 <TableCell align="right" sx={{fontWeight: "bolder"}}>view</TableCell>

//               </TableRow>
//             </TableHead>
//             <TableBody>
//             {workOrderList.map(({site, workOrderId, }) => (
//               <TableRow
//                 key={site}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                 {workOrderId}
//                 </TableCell>
//                 <TableCell align="right">{hours}</TableCell>
//                 <TableCell align="right"> {partPrice}</TableCell>
//                 <TableCell align="right">totalhoursandPrice</TableCell>
//                 <TableCell align="right">Current / Finished</TableCell>
//                 <TableCell align="right"> <WorkOrdersDialog /> </TableCell>
//               </TableRow>
//             ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         </>
//         );
//         }