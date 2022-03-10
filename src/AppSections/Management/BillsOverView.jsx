import { BillView } from "../Maintenance/EnterBill";
import { RentRollSummary } from "../Rents/RentRollSummary";
import { BillSheet } from "./BillsSummary";
import { TenantSummary } from "./TenantSummary";

export function BillsOverview() {
    return (
<div>
bills overview
rents

<RentRollSummary />
tenants
<TenantSummary />

<BillView/>
 
</div>
    );
}