import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {filteredApplicantListState} from "../../data/applicantAtoms";
  import {ApplicantCreator} from "./ApplicantCreator";
  import {Applicant} from "./ApplicantList";
//   import { TodoListStats } from './TodoListStats';
//   import { TodoListFilters } from './TodoListFilters';

export function ApplicantList() {
    const applicant = useRecoilValue(filteredApplicantListState);
  
    return (
      <>
        {/* <TodoListStats />
        <TodoListFilters /> */}
        <ApplicantCreator />
  
        {applicant.map((applicantItem) => (
          <Applicant key={applicantItem.id} item={applicantItem} />
        ))}
      </>
    );
  }