import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import EnterRentsDialog from './EnterRentsDialog';
import { RentRoll } from './RentRoll';
import RentRollDialog from './RentRollDialog';

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
          <EnterRentsDialog />
          <RentRollDialog />
          
          <Button>upload deposit slips ?</Button>
        </ButtonGroup>
      
      </Box>
    );
  }