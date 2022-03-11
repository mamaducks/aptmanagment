import VariantButtonGroup from "./ButtonGroup";
import TenantTable from "./Table";
import RenewTable from "./TenantRenewals";

export function Tenants() {
  return (
    <>
      <VariantButtonGroup />
      <div>header: Tenants</div>
      By Site
      <TenantTable />
      
      <div>tenants renewing soon update tenant</div>
      <RenewTable />
    </>
  );
}
