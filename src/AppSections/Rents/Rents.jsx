import VariantButtonGroup from "./ButtonGroup";
import RentsTable from "./Table";
import {Rent } from "./RentSheet"
import { RentRoll } from "./RentRoll";

export function Rents() {
  return (
    <>
      <div>header: Rents</div>
      <div>upload deposit slips</div>
      
<VariantButtonGroup />
<div>show six months rent roll</div>
<div>rent roll site totals</div>
enter rents by site table editable columns
<RentsTable />
<Rent />
<RentRoll />

</>
  );
}
