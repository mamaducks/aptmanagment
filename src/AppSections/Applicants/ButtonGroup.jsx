import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import NewApplicantDialog from './EnterApplicantDialog';
import UpdateApplicantDialog from './UpdateApplicantDialog';
import MoveInDialog from './MoveInDialog';

export default function VariantButtonGroup() {
    return (
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
    );
  }