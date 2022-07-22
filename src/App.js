import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button
} from '@mui/material';
import Torch from './tabs/Torch';
import Convert from './tabs/Convert';

function App() {
  const [value, setValue] = React.useState(0);

  const handleTabs = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.default'
      }}
      className='w-screen h-screen flex flex-col'
    >
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: 'center', fontFamily: 'BomberEscort' }}
            >
              qorse
            </Typography>
          </Container>
        </Toolbar>

        <Box
          sx={{
            width: '100%',
            height: '50px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Button
            sx={{
              width: 'calc(100%/3)',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0',
              borderLeft: '1px solid rgba(50, 50, 93, 0.25)',
              borderTop: '1px solid rgba(50, 50, 93, 0.25)',
              borderRight: '0.5px solid rgba(50, 50, 93, 0.25)'
            }}
            onClick={() => { handleTabs(0) }}
            className={value === 0 ? 'tab-box-shadow' : ''}
          >
            <Typography variant='button' color='text.primary'>Torche</Typography>
          </Button>

          <Button
            sx={{
              width: 'calc(100%/3)',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0',
              borderLeft: '1px solid rgba(50, 50, 93, 0.25)',
              borderTop: '1px solid rgba(50, 50, 93, 0.25)',
              borderRight: '0.5px solid rgba(50, 50, 93, 0.25)'
            }}
            onClick={() => { handleTabs(1) }}
            className={value === 1 ? 'tab-box-shadow' : ''}
          >
            <Typography variant='button' color='text.primary'>Convertir</Typography>
          </Button>

          <Button
            sx={{
              width: 'calc(100%/3)',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0',
              borderLeft: '1px solid rgba(50, 50, 93, 0.25)',
              borderTop: '1px solid rgba(50, 50, 93, 0.25)',
              borderRight: '0.5px solid rgba(50, 50, 93, 0.25)'
            }}
            onClick={() => { handleTabs(2) }}
            className={value === 2 ? 'tab-box-shadow' : ''}
          >
            <Typography variant='button' color='text.primary'>ABC</Typography>
          </Button>
        </Box>
      </AppBar>
      {
        (
          () => {
            switch (value) {
              case 0:
                return <Torch />;
              case 1:
                return <Convert />;
              case 2:
                return <div />;
              default:
                return <Torch />;
            }
          }
        )()
      }
    </Box>
  );
}

export default App;
