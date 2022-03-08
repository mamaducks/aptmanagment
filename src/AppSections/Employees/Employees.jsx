import VariantButtonGroup from "./ButtonGroup";
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

<DenseTable />
    </>
  );
}

export const Employee = () => {
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
