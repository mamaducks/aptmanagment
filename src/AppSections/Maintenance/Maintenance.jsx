import { NewRequest } from "./NewWorkOrder/NewWorkRequest";
import { TodoList } from "../../App/Todo/ToDo";
import { WorkOrderTable } from "./SummaryWorkOrders/WorkOrderTable";
import { WorkOrderView } from "./SummaryWorkOrders/WorkOrderView";
// import { Bill } from "./EnterBill";
// import { SiteWorkOrderTable } from "./SiteWorkOrders";
import { BillTable } from "./Billing/BillTable";
import { Parts } from "./NewWorkOrder/Parts";
import { AllParts } from "./Parts/PartsList";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import NewWorkRequestDialog from "./NewWorkOrder/WorkOrderDialog";
import AddBillDialog from "./Billing/EnterBillDialog";
import WorkOrdersDialog from "./SummaryWorkOrders/WorkOrderViewDialog";
import BillsDialog from "./Billing/BillViewDialog";
import OrderTableEditDialog from "./EditableWorkOrder/TableEditableWorkOrderDialog";
import { EditableWorkOrderList } from "./EditableWorkOrder/EditableWorkOrderList";

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
      <div>
        Company level completed work orders summary all sites. can view all work
        orders same way as site level completed work orders
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
          {/* <OrderTableEditDialog /> */}
          {/* <WorkOrdersDialog /> */}
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
      <WorkOrderTable />{" "}
      {/* company level finished by date requested view single work order read only  with print */}
      {/* <SiteWorkOrderTable /> current work orders site level by date requested newest to oldest with editable work order for maintenance */}
      <EditableWorkOrderList />{" "}
      {/* current work orders by site level view  editable work order for managers?*/}
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
