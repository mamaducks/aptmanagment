import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import EnterRentsDialog from "./EnterRents/EnterRentsDialog";
import { RentRollDeposits } from "./RentRoll";
import RentRollDialog from "./RentRollDialog";
import { Rent } from "./EnterRents/RentSheet";
// import { RentRollSummary } from "./RentRollSummary";
import { RentRollOverview } from "../../unused/RentRollOverview";

export function Rents() {
  return (
    <>
      <div>user employee id</div>
      <div>header: Rents</div>
      <div>upload deposit slips</div>
      <Box
        sx={{
          display: "flex",
          // flexDirection: 'column',
          justifyContent: "center",
          gap: 1,
          "& > *": {
            m: 1,
          },
        }}
      >
        {/* <ButtonGroup aria-label="outlined button group"> */}
        <EnterRentsDialog />
        <RentRollDialog />

        <Button>upload deposit slips ?</Button>
        {/* </ButtonGroup> */}
      </Box>

      <div>rent roll site totals</div>
      {/* <RentRollOverview /> */}
      <RentRollDeposits />
      <div>show 3 months rent roll</div>
      {/* <RentRollSummary /> */}
      {/* <EnterRentsList /> */}
     

    </>
  );
}
