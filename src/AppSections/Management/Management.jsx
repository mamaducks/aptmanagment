import LinkButtonGroup from "../../App/LinkButtons";
import { BillsOverview } from "./BillsOverView";
import { BillSheet } from "./BillsSummary";
import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Management() {
  return (
    <>
      <div>header: Management</div>
      <div>add: new manage</div>
      <div>edit manage</div>
      <div>add sites</div>
      <div>edit sites</div>
      <div>
        management user view rents : RentRollSummary  total maintenance hours billed :
        WorkHoursBill 
      </div>
      <div>management list</div>
      <VariantButtonGroup />
      Year overview
      <BillsOverview />
      {/* <BillSheet /> */}

      {/* <DenseTable /> */}
    </>
  );
}
