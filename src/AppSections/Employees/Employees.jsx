import VariantButtonGroup from "./ButtonGroup";
import { Employee } from "./EmployeeList";
import DataGridDemo from "./EmployeeTableGrid";
import Demo from "./EmployeeTableGrid";
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
      <div>
      employees
name info
start date
end date
rate?
type of employee
      </div>
<Employee />
<DenseTable />
<DataGridDemo />
    </>
  );
}

export const EmployeeStuff = () => {
  return (
    <>
      <div>Admin</div>
      <div>Maintenance</div>
      <div>other</div>
      <div>office manager</div>
      <div>site manager</div>
      <div>maintenance manager</div>
    </>
  );
};
