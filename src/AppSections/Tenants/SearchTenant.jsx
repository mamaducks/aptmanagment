import TenantTable from "./Table";
import TenantInfoDialog from "./TenantInfoDialog";
import TenantDialog from "./SearchTenantDialog";

export function SearchTenant() {
    return (
        <>
<div>search for tenant by name  or unit</div>
<TenantTable />
{/* <SearchTenantDialog /> */}
<div>click table row to view tenant</div>

<TenantInfoDialog />

</>
    );
}