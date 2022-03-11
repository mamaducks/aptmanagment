import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

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
          <Button>enter rents</Button>
          <Button>view rent roll</Button>
          <Button>upload deposit slips</Button>
          <Button>view deposit slips</Button>
        </ButtonGroup>
      
      </Box>
    );
  }