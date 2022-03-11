import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import NewWorkRequestDialog from './NewWorkOrder/WorkOrderDialog';
import AddBillDialog from './EnterBillDialog';

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
        <NewWorkRequestDialog />
        <Button>View Work Orders </Button>
        <AddBillDialog />
          <Button>View Bills </Button>
        </ButtonGroup>
      
      </Box>
    );
  }