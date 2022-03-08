import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Employees() {
  return (
    <>
      <div>header: employees</div>
      <div>add: new employee</div>
      <div>remove: employee</div>
      <VariantButtonGroup />
      <div>current employees list</div>

<DenseTable />
    </>
  );
}

export const Employee = () => {
  return (
    <>
      <div>Admin</div>
      <div>Maintenance</div>
      <div>Supervisor</div>
      <div>Reception</div>
    </>
  );
};
