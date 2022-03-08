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
          <Button>add: new work order</Button>
          <Button>edit work order</Button>
          <Button>remove: </Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button>add: new work order</Button>
          <Button>edit work order</Button>
          <Button>remove: </Button>
        </ButtonGroup>
      </Box>
    );
  }