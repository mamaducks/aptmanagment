import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import NewTenantDialog from './MoveInDialog';

export default function VariantButtonGroup() {
    return (
      <Box
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          gap: 1,
          '& > *': {
            m: 1,
          },
        }}
      >
        {/* <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{gap: 3}}> */}
          <NewTenantDialog />
          <Button>edit tenant info </Button>
          
          <Button>View Tenant Info </Button>
          <Button>move Tenant out </Button>
        {/* </ButtonGroup> */}
     
      </Box>
    );
  }