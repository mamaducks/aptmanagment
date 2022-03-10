import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";
import {Rent } from "./RentSheet"
import { RentRoll } from "./RentRoll";

export function Rents() {
  return (
    <>
      <div>header: Rents</div>
      <div>add: new rent roll</div>
      <div>edit rent roll</div>
<VariantButtonGroup />
<DenseTable />
<Rent />
<RentRoll />

</>
  );
}
