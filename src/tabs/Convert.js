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
  const timeoutID = React.useRef(null);
  const [morseCode, setMorseCode] = React.useState('');
  const textareaRef = React.useRef();
  React.useEffect(() => {
    textareaRef.current.focus();
  }, [morseCode]);

  const writeMorseCode = (value) => {
    if (timeoutID.current)
      clearInterval(timeoutID.current);

    setMorseCode(prevMorseCode => prevMorseCode + value);
    timeoutID.current = setTimeout(() => {
      setMorseCode(prevMorseCode => prevMorseCode + ' ');
    }, 600);
  };

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
            height: '100%',
            width: '100%',
            border: '1px solid',
            borderColor: '#424242',
            bgcolor: 'black',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          <textarea
            ref={textareaRef}
            style={{
              padding: '4px 12px',
              width: '100%',
              fontFamily: 'LEDCalculator',
              display: 'flex',
              flexWrap: 'wrap',
              overflowY: 'scroll',
              borderRadius: '4px',
              backgroundColor: 'black',
              border: 'none',
              color: '#16c60c'
            }}
            value={morseCode}
            readOnly
          >
          </textarea>
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
            height: '50%',
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
            onTouchStart={() => { setTiClicked(true) }}
            onTouchEnd={() => { setTiClicked(false) }}
            onClick={() => { writeMorseCode('.') }}
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
            onTouchStart={() => { setTaClicked(true) }}
            onTouchEnd={() => { setTaClicked(false) }}
            onClick={() => { writeMorseCode('_') }}
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