import { NewRequest } from "./NewWorkOrder/NewWorkRequest";
import { TodoList } from "../../App/Todo/ToDo";
import { WorkOrderTable } from "./WorkOrderTable";
import { WorkOrderView } from "./WorkOrderView";
import { Bill } from "./EnterBill";
import { SiteWorkOrderTable } from "./SiteWorkOrders";
import { BillTable } from "./BillTable";
import { Parts } from "./NewWorkOrder/Parts";
import { AllParts } from "./PartsList";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import NewWorkRequestDialog from "./NewWorkOrder/WorkOrderDialog";
import AddBillDialog from "./EnterBillDialog";
import WorkOrdersDialog from "./WorkOrderViewDialog";
import BillsDialog from "./BillViewDialog";
import OrderTableEditDialog from "./EditableWorkOrderDialog";
export const GLCodes = () => {
  return (
    <>
      as atom ...?
      <div>5070 Maintenence Payroll</div>
      <div> 5330 Miscellaneous</div>
      <div>5070 Outside Maintenance</div>
      <div>5090 Supplies</div>
      <div>5100 Painting Supplies</div>
      <div>5100 Painting</div>
      <div>5111 Snow Supplies</div>
      <div>5140 Appliances</div>
    </>
  );
};

export function Maintenence() {
  return (
    <>
      <div>
        print work order/ print bill list? send work order multiple recipient
        cancel work order
      </div>
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
        <ButtonGroup aria-label="maintenance-buttons">
          <NewWorkRequestDialog />
          <OrderTableEditDialog />
          <WorkOrdersDialog />
          <AddBillDialog />
          <BillsDialog />
        </ButtonGroup>
      </Box>
      <div>can see work order by employee id ? site ?</div>
      <div>
        parts list
        <AllParts />
      </div>
      <div>display WorkOrdersTable</div>
      <div>Work Order Table</div>
      clickable rows take to workorder view
      <WorkOrderTable />
      <SiteWorkOrderTable />
      <br />
      <div>
        view bills by contractor/company, category sort by newest or oldest{" "}
      </div>
      bills month or year to date (can view by month)?
      <BillTable />
      to do list has some totals stuff
      <TodoList />
    </>
  );
}
