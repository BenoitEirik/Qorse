import * as React from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
  styled
} from '@mui/material';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SpeakerPhoneOutlinedIcon from '@mui/icons-material/SpeakerPhoneOutlined';
import MetalBg from '../assets/images/—Pngtree—metal chrome silver background_5405202.jpg';
import SwipeableViews from '../react-swipeable-views/src';
import { Flashlight } from '@awesome-cordova-plugins/flashlight';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  '.MuiSwitch-thumb': {
    width: 20,
    height: 20,
    backgroundImage: `url('${MetalBg}')`,
    backgroundSize: 'cover',
  }
}));

var audioCtx = new AudioContext();

function Torch() {
  // Gauge 
  const [gauge, setGauge] = React.useState(1);
  const intervalID = React.useRef(null);
  // Options
  const [torch, setTorch] = React.useState(true);
  const [sound, setSound] = React.useState(false);
  const [oscillator, setOscillator] = React.useState(null);
  const [selectedSound, setSelectedSound] = React.useState(0);

  const startGaugeIncreasing = () => {
    if (intervalID.current !== null)
      return;

    intervalID.current = setInterval(() => {
      setGauge((prevGauge) => prevGauge + 4);
    }, 2);

    if (torch)
      Flashlight.switchOn();

    if (sound) {
      var tmpOscillator = audioCtx.createOscillator()
      tmpOscillator.type = ['sine','triangle','square','sawtooth'][selectedSound];
      tmpOscillator.connect(audioCtx.destination);
      tmpOscillator.start();
      setOscillator(tmpOscillator);
    }
  };

  const resetGaugeIncreasing = () => {
    if (intervalID.current !== null) {
      setGauge(1);
      clearInterval(intervalID.current);
      intervalID.current = null;

      if (torch)
        Flashlight.switchOff();

      if (sound) {
        oscillator.stop();
        setOscillator(null);
      }
    }
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
          justifyContent: 'space-evenly',
          gap: '12px',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: 'primary.main'
        }}
      >
        <Box
          sx={{
            minWidth: '16%',
            flexShrink: '0',
            color: 'white'
          }}
        >
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <SpeakerPhoneOutlinedIcon
              sx={{ pt: '6px' }}
              fontSize="large"
            />
          </Box>
          <FormControlLabel
            sx={{
              paddingX: '12px',
              pb: '6px',
              width: '100%'
            }}
            control={
              <MaterialUISwitch checked={sound} onChange={() => {setSound(prevSound => !prevSound)}} />
            }
            label="Pulsion sonore"
          />
          <Box
            sx={{
              position: 'relative',
              marginY: '12px',
              p: '4px 0px',
              width: '100%',
              height: '30px',
              border: '1px solid',
              borderColor: '#424242',
              bgcolor: 'lightgrey',
              color: '#424242',
              borderRadius: '4px',
              boxShadow: 'rgb(44, 62, 80) 15px 0px 15px -15px inset, rgb(44, 62, 80) -15px 0px 15px -15px inset',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '26px',
                left: 'calc(50% - 6px)',
                width: '0px',
                height: '0px',
                borderTop: '6px solid transparent',
                borderBottom: '6px solid #424242',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent'
              }}
            />
            <SwipeableViews
              style={{
                width: '50%',
                textAlign: 'center',
                overflow: 'visible',
                fontSize: '12px'
              }}
              enableMouseEvents={true}
              onChangeIndex={(index) => {setSelectedSound(index)}}
            >
              <div style={{ userSelect: 'none', cursor: 'grab' }}>Sinusoide</div>
              <div style={{ userSelect: 'none', cursor: 'grab' }}>Triangulaire</div>
              <div style={{ userSelect: 'none', cursor: 'grab' }}>Carré</div>
              <div style={{ userSelect: 'none', cursor: 'grab' }}>Dents</div>
            </SwipeableViews>
          </Box>
          <Divider style={{ backgroundColor: '#424242' }} />
          <Box
            sx={{
              textAlign: 'center'
            }}
          >
            <BoltOutlinedIcon
              sx={{ pt: '6px' }}
              fontSize="large"
            />
          </Box>
          <FormControlLabel
            sx={{
              paddingX: '12px',
              pb: '6px',
              width: '100%'
            }}
            control={
              <MaterialUISwitch checked={torch} onChange={() => {setTorch(prevTorch => !prevTorch)}} />
            }
            label="Flash lumineux"
          />
          <Box
            sx={{
              mt: '12px',
              p: '4px 0px',
              width: '100%',
              border: '1px solid',
              borderColor: '#424242',
              bgcolor: 'black',
              color: '#16c60c',
              borderRadius: '4px'
            }}
          >
            <Box
              sx={{
                p: '2px 12px',
                paddingX: '12px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={{ fontFamily: 'LEDCalculator' }}>TX:</Typography>
              <Typography sx={{ fontFamily: 'LEDCalculator' }}>...</Typography>
            </Box>
            <Box
              sx={{
                p: '1px 12px',
                paddingX: '12px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={{ fontFamily: 'LEDCalculator' }}>Code:</Typography>
              <Typography sx={{ fontFamily: 'LEDCalculator' }}>...</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            paddingX: '12px',
            flexGrow: '1',
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '12px',
            alignItems: 'stretch'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'end',
              width: '8px',
              height: '100%',
              bgcolor: 'secondary.main',
              borderRadius: '8px',
              border: '1px solid'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: '-1px',
                top: '65%',
                width: '10px',
                height: '10px',
                bgcolor: 'background.paper'
              }}
            >

            </Box>
            <div
              style={{
                width: '100%',
                height: gauge + '%',
                borderRadius: '8px',
                backgroundColor: '#16C60C'
              }}
            />
          </Box>

          <Button
            sx={{
              borderRadius: '8px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              alignItems: 'center',
            }}
            variant='contained'
            style={{
              backgroundImage: `url('${MetalBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onTouchStart={startGaugeIncreasing}
            onTouchEnd={resetGaugeIncreasing}
          >
            <PodcastsOutlinedIcon
              sx={{
                pb: '10px',
                color: '#424242'
              }}
            />
            <Typography
              sx={{
                pt: '10px',
                pb: '30px',
                color: '#424242',
                fontFamily: 'BarcadeCondensed'
              }}
            >
              (PTF)
            </Typography>
          </Button>
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
              backgroundImage: `url('${MetalBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'left'
            }}
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
              backgroundImage: `url('${MetalBg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'right'
            }}
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

export default Torch;