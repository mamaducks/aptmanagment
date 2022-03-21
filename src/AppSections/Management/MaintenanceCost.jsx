import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { allBills, getBillsInfoNew } from "../../data/billAtoms";
import { allWorkOrderBills, getWorkOrderInfoNew, getWorkOrderCategories } from "../../data/workOrderAtoms"
import { useRecoilValue } from "recoil";
import { Typography } from "@mui/material";

export function MaintenanceOrderCosts() {
  const workOrderBills = useRecoilValue(allWorkOrderBills)
  const workOrderCategories = useRecoilValue(getWorkOrderInfoNew);

  
  return (
      <>
        <div>total billed :  Costs Bill</div>
  
        <div>Maintenance Costs Table</div>
        {workOrderCategories.map((item) => (
          <Paper>
                      <Typography>{item.siteId}</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
              {item.categories.map((item) => (
                    <TableCell align="right" sx={{fontWeight: "bolder"}}>
                      {item.categoryId}
                    </TableCell>
                   ))} 
                {/* <TableCell align="right" sx={{fontWeight: "bolder"}}>supplies</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>painting supplies</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>snow supplies</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>appliance supplies</TableCell>
                <TableCell align="right" sx={{fontWeight: "bolder"}}>maintenance hours billed</TableCell> */}


              </TableRow>
            </TableHead>
            <TableBody>
             
{/* {item.categories.map((item) => (  */}
              <TableRow
                key="key"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {/* {item.siteId} */}
                </TableCell>
                    <TableCell align="right" sx={{fontWeight: "bolder"}}>
                      {item.desc}
                    </TableCell>
                  {/* ))} */}



                    <TableCell align="right" sx={{fontWeight: "bolder"}}>
                      ${(item.total || 0).toLocaleString()}
                    </TableCell>
                {/* <TableCell align="right">supplies $</TableCell>
                <TableCell align="right">painting supplies $</TableCell>
                <TableCell align="right">snow supplies $</TableCell>

                <TableCell align="right">appliance supplies $</TableCell>
                <TableCell align="right">hrs $</TableCell> */}
               
              </TableRow>
             
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
        ))} 
        <div>year total costs to date?</div>
        </>
        );
        }
