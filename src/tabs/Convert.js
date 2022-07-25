import * as React from 'react';
import {
  Box,
  Container,
  Button,
  Switch,
  styled,
  Typography
} from '@mui/material';
import MetalBg from '../assets/images/—Pngtree—metal chrome silver background_5405202.jpg';

const TranslationSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 42,
  '& .MuiSwitch-thumb': {
    marginTop: 6,
    marginLeft: 6,
    width: 12,
    height: 12,
    backgroundImage: `url('${MetalBg}')`,
    backgroundSize: 'cover',
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 20
  },
}));

function Convert() {
  const [tiClicked, setTiClicked] = React.useState(false);
  const [taClicked, setTaClicked] = React.useState(false);

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
    >
      <Box
        sx={{
          flexGrow: '1',
          mt: '12px',
          p: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '12px',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: 'primary.main'
        }}
      >
        <Box
            sx={{
              flexGrow: '1',
              p: '4px 0px',
              width: '100%',
              border: '1px solid',
              borderColor: '#424242',
              bgcolor: 'black',
              color: '#16c60c',
              borderRadius: '4px'
            }}
          >
            
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ color: 'white' }}>Morse</Typography>
            <TranslationSwitch />
            <Typography sx={{ color: 'white' }}>Langage</Typography>
          </Box>
          <Box
            sx={{
              flexGrow: '1',
              p: '4px 0px',
              width: '100%',
              border: '1px solid',
              borderColor: '#424242',
              bgcolor: 'black',
              color: '#16c60c',
              borderRadius: '4px'
            }}
          >
            
          </Box>
      </Box>

      <Box
        sx={{
          flexGrow: '1',
          mb: '12px',
          p: '12px',
          maxHeight: '100px',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: 'primary.main'
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
            gap: '12px'
          }}
        >
          <Button
            sx={{
              flexGrow: '1',
              fontFamily: 'MorseRegular',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            style={{
              opacity: tiClicked ? '0.8' : '1',
              backgroundImage: `url('${MetalBg}')`,
              backgroundPosition: 'left'
            }}
            disableRipple='true'
            onTouchStart={() => {setTiClicked(true)}}
            onTouchEnd={() => {setTiClicked(false)}}
          >
            <Box
              sx={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                bgcolor: '#424242'
              }}
            />
          </Button>
          <Button
            sx={{
              flexGrow: '1',
              fontFamily: 'MorseRegular',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            style={{
              opacity: taClicked ? '0.8' : '1',
              backgroundImage: `url('${MetalBg}')`,
              backgroundPosition: 'right'
            }}
            disableRipple='true'
            onTouchStart={() => {setTaClicked(true)}}
            onTouchEnd={() => {setTaClicked(false)}}
          >
            <Box
              sx={{
                width: '60px',
                height: '20px',
                borderRadius: '12px',
                bgcolor: '#424242'
              }}
            />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Convert;