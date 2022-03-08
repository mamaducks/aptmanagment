import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Maintenence() {
  return (
    <>
      <div>header: Maintenance</div>
      <div>add: new work order</div>
      <div>edit work order</div>

      <div>work order = workOrder</div>
      <VariantButtonGroup />
      <DenseTable />
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
