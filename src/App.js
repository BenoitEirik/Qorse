import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Container
} from '@mui/material';
import Torch from './tabs/Torch';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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

        <Tabs
          aria-label="basic tabs example"
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="inherit"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Torche" />
          <Tab label="Convertir" />
        </Tabs>
      </AppBar>

      <Torch />
    </Box>
  );
}

export default App;
