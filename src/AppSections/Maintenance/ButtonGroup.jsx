import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import NewWorkRequestDialog from "./NewWorkOrder/WorkOrderDialog";
import AddBillDialog from "./EnterBillDialog";
import WorkOrdersDialog from "./WorkOrderViewDialog";
import BillsDialog from "./BillViewDialog";

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <NewWorkRequestDialog />
        <Button>Edit Work Order</Button>
        <WorkOrdersDialog />
        <AddBillDialog />
        <BillsDialog />
      </ButtonGroup>
    </Box>
  );
}
