import VariantButtonGroup from "./ButtonGroup";
import DenseTable from "./Table";

export function Rents() {
  return (
    <>
      <div>header: Rents</div>
      <div>add: new rent roll</div>
      <div>edit rent roll</div>
<VariantButtonGroup />
<DenseTable />
<div>
rents
user employee id
site/unit
amount due
amount paid

credit/delinquency
month
tenant id
vacant
</div>
      <div>rent roll list</div>
      <div>site</div>
      <div>
          site name
      TENANT																			
APT. #	LAST NAME		JAN		FEB		MAR		APR		MAY		JUN		JUL		AUG		SEP	
      </div>
      <div>upload deposit slip copy</div>
    </>
  );
}
