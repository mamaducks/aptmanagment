import VariantButtonGroup from "./ButtonGroup";
import { NewRequest } from "./NewWorkOrder/NewWorkRequest";
import { TodoList } from "../../App/Todo/ToDo";
import { WorkOrderTable } from "./WorkOrderTable";
import { WorkOrderView } from "./WorkOrderView";
import { Bill } from "./EnterBill";
import { SiteWorkOrderTable } from "./SiteWorkOrders";
import { BillTable } from "./BillTable";

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
      <div>header: Maintenance</div>
      <div>display WorkOrdersTable</div>
      <div>edit work order</div>
      <div>
        print work order send work order multiple recipient cancel work order
      </div>
      <div>work order employee id parts cost site/and if unit date</div>
      <VariantButtonGroup />
      <div>Work Order Table</div>
      clickable rows take to workorder view
      <WorkOrderTable />
      <SiteWorkOrderTable />
      <WorkOrderView />
      edit work order user that edits cost and parts / maintenance employee id
      <div>view bills by contractor/company, category sort by newest or oldest </div>
      bills month or year to date (can view month)
      <BillTable />
      to do list has some totals stuff
      <TodoList />
    </>
  );
}
