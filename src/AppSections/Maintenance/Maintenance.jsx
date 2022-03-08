import VariantButtonGroup from "./ButtonGroup";
import { TodoItemCreator } from "./NewWorkOrder";
import DenseTable from "./Table";
import { TodoList } from "../../App/Todo/ToDo";

export function Maintenence() {
  return (
    <>
      <div>header: Maintenance</div>
      <div>add: new work order</div>
      <div>edit work order</div>
      <div>add bills</div>

      <div>work order = workOrder</div>
      <div>
      work order 
employee id
parts
cost
site/and if unit
date

      </div>
      <VariantButtonGroup />
      <DenseTable /> 
      <div>
      clickable rows take to workorder view
      make cost and parts data
      user that edits cost and parts / maintenance employee id
      vehicle maintenance
      snow/ lawn care
      Appliances
      flooring
</div>
<div>
maintenance

user supervisor id
bills categories
work orders
contractors info?

gl codes ids

user employee id
add work order
edit work order
submit work order

</div>
<div>
    <TodoList />
</div>
    </>
  );
}

export const WorkOrder = () => {
  return (
    <>
      <div>Site 12</div>
      <div>Unit 449</div>
      <div>Creator 5</div>
      <div>Assignee 6</div>
      <div>Occupant John Smith</div>
      <div>Work requested * Fix something</div>
      <div>Remarks</div>
      <div>3 Gloves 3 Painting Supplies</div>
      <div>print</div>
    </>
  );
};

export const GLCodes = () => {
  return (
    <>
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
