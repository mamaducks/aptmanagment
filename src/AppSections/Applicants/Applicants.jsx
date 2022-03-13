import { Applicant } from "./ApplicantList";
import DenseTable from "./Table";
import DataGridDemo from "./ApplicantTableGrid"
import WaitingListTable from "./Table";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import NewApplicantDialog from './EnterApplicantDialog';
import UpdateApplicantDialog from './UpdateApplicantDialog';
import MoveInDialog from './MoveInDialog';
export function Applicants() {
  return (
    <>
      <div>header: applicants</div>
      <div>add: new applicant</div>
      <div>remove: applicant</div>
      <div> reject approve </div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <NewApplicantDialog />
          <UpdateApplicantDialog />
          <MoveInDialog />
        </ButtonGroup>
        
      </Box>
      
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
