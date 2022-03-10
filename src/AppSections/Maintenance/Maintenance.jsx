import VariantButtonGroup from "./ButtonGroup";
import { NewRequest } from "./NewWorkOrder/NewWorkRequest";
import { TodoList } from "../../App/Todo/ToDo";
import { WorkOrderTable } from "./WorkOrderTable";
import { WorkOrderView } from "./WorkOrderView";
import { Bill } from "./EnterBill";

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
        print work order send work order multiple recipient
        cancel work order
      </div>
      <div>work order employee id parts cost site/and if unit date</div>
      <VariantButtonGroup />
      <div>Work Order Table</div>
      clickable rows take to workorder view
      <WorkOrderTable />
      <div>Enter Work Order</div>
      <NewRequest />
      
      <WorkOrderView />
      edit work order user that edits cost and parts / maintenance employee id
      <div>Add Company Bill</div>
      <Bill />
      <div>
        to do list has some totals stuff
        <TodoList />
      </div>
    </>
  );
}
