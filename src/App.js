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
              className="font-['89Speed']"
            >
              Qorse
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
              width: '50%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0'
            }}
            onClick={() => { handleTabs(0) }}
            className={value === 0 ? 'tab-box-shadow' : ''}
          >
            <Typography sx={{ color: 'white' }}>Torche</Typography>
          </Button>

          <Button
            sx={{
              width: '50%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '0'
            }}
            onClick={() => { handleTabs(1) }}
            className={value === 1 ? 'tab-box-shadow' : ''}
          >
            <Typography sx={{ color: 'white' }}>Convertir</Typography>
          </Button>
        </Box>
      </AppBar>
      {
        (
          () => {
            if (value === 0) {
              return <Torch />;
            } else if (value === 1) {
              return <Convert />;
            }
          }
        )()
      }
    </Box>
  );
}

export default App;
