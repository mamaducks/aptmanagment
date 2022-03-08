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
      <div>tenant list</div>
      <div>site name move in date move out date maintenance request </div>
    </>
  );
}
