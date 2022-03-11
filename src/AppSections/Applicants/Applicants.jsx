import { Applicant } from "./ApplicantList";
import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";
import DataGridDemo from "./ApplicantTableGrid"
import WaitingListTable from "./Table";

export function Applicants() {
  return (
    <>
      <div>header: applicants</div>
      <div>add: new applicant</div>
      <div>remove: applicant</div>
      <div> reject approve </div>
      <VariantButtonGroup /> 
      
      <div>
        applicants name info date added make tenant status: accept/reject sites
        applying for
      </div>
      <div>applications waiting list</div>
      <WaitingListTable />
      <div>filter table</div>
      <div>current waiting</div>
      <div>rejected</div>
    
      {/* <DataGridDemo /> */}
     
      
    </>
  );
}
