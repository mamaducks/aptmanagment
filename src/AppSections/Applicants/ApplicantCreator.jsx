import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useSetRecoilState,
    useRecoilValue,
  } from 'recoil';
  import { useState } from 'react';
  import {applicantListState} from "../../data/applicantAtoms";


export function ApplicantCreator() {
    const [inputValue, setInputValue] = useState('');
    const setApplicantList = useSetRecoilState(applicantListState);
  
    const addItem = () => {
        setApplicantList((oldApplicantList) => [
        ...oldApplicantList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    };
  
    const onChange = ({target: {value}}) => {
      setInputValue(value);
    };
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
  
  // utility for creating unique Id
  let id = 0;
  function getId() {
    return id++;
  }