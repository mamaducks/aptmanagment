import VariantButtonGroup from "./ButtonGroup";
import RentsTable from "./Table";
import {Rent } from "./RentSheet"
import { RentRoll } from "./RentRoll";
import EnterRentsDialog from "./EnterRentsDialog";
import { RentRollSummary } from "./RentRollSummary";
import { RentRollOverview } from "./RentRollOverview";


export function Rents() {
  return (
    <>
     <div>user employee id</div>
      <div>header: Rents</div>
      <div>upload deposit slips</div>
      
<VariantButtonGroup />

<div>rent roll site totals</div>
<RentRollOverview />
<RentRoll />
<div>show 3 months rent roll</div>
<RentRollSummary />
{/* <EnterRentsList /> */}

</>
  );
}
