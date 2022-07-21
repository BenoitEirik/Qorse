import * as React from 'react';
import {
  Container
} from '@mui/material';


function Convert() {
  return (
    <Container
      sx={{
        height: '100%',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
      maxWidth="sm"
    ></Container>
  );
}

export default Convert;