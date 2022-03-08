import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Tenants() {
  return (
    <>
      <div>header: Tenants</div>
      <div>move in: new Tenants</div>
      <div>move out: Tenants / transfer: tenant</div>
<VariantButtonGroup />
<DenseTable />
<div>
name info
from applicant
date lease
renewal date
rent start/rent current? maybe from rent roll
move in/out/transfer
site unit
</div>
      <div>tenant list</div>
      <div>site name move in date move out date maintenance request </div>
    </>
  );
}
