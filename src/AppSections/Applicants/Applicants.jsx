import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Applicants() {
  return (
    <>
      <div>header: applicants</div>
      <div>add: new applicant</div>
      <div>remove: applicant</div>
<VariantButtonGroup />
      <div>applications waiting list</div>
<DenseTable />
      <div>
      7	Date	Time	Name	Phone #	Race	Family 	M/F	D/P	Inc.	Unit	Rental	Occupancy	Lease	Removal 	Comments
						Size			Level	Size	Assist.	Cont. Date	Date	Date	
      </div>
    </>
  );
}
