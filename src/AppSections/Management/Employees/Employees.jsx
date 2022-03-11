import VariantButtonGroup from "./ButtonGroup";
import { Employee } from "./EmployeeList";
import DataGridDemo from "./EmployeeTableGrid";
import Demo from "./EmployeeTableGrid";
import NewEmployeeDialog from "./NewEmployeeDialog";
import DenseTable from "./Table";

export function Employees() {
  return (
    <>
      <div>belongs in management??</div>
      <div>header: employees</div>
      <div>add: new employee</div>
      <div>remove: employee</div>
      <VariantButtonGroup />
      <div>current employees list</div>
      <DenseTable />
      <DataGridDemo />
      <div>employees name info start date end date rate? type of employee</div>
      <NewEmployeeDialog />
      <Employee />
    </>
  );
}

