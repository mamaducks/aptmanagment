import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Applicants() {
  return (
    <>
      <div>header: applicants</div>
      <div>add: new applicant</div>
      <div>remove: applicant</div>
      <div> reject approve </div>
<VariantButtonGroup />
<div>
applicants
name info
date added
make tenant
status: accept/reject
sites applying for

</div>
      <div>applications waiting list</div>
      <div>current waiting</div>
      <div>rejected</div>
<DenseTable />
      <div>
      7	Date	Time	Name	Phone #	Race	Family 	M/F	D/P	Inc.	Unit	Rental	Occupancy	Lease	Removal 	Comments
						Size			Level	Size	Assist.	Cont. Date	Date	Date	
      </div>
    </>
  );
}
