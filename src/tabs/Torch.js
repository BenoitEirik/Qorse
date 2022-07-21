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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    width: 20,
    height: 20,
    backgroundImage: `url('${MetalBg}')`,
    backgroundSize: 'cover',
  }
}));

function Torch() {
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
          mt: '12px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            minWidth: '50px',
            width: '200px',
            height: '100%',
            bgcolor: 'black',
            border: '1px solid',
            borderColor: '#424242',
            color: '#16C60C'
          }}
        >
          <Typography
            sx={{
              pl: '8px',
              fontFamily: 'LEDCalculator'
            }}
          >
            TX:
          </Typography>
          <Typography
            sx={{
              width: '100%',
              fontFamily: 'LEDCalculator',
              textAlign: 'center'
            }}
          >
            a
          </Typography>
          <Typography
            sx={{
              pr: '8px',
              width: '100%',
              fontFamily: 'MorseRegular',
              textAlign: 'center'
            }}
          >
            a
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          p: '12px',
          display: 'flex',
          justifyContent: 'space-evenly',
          gap: '12px',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: 'primary.main'
        }}
        className='basis-8/12 border-1 rounded-lg '
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
              <MaterialUISwitch />
            }
            label="Pulsion sonore"
          />
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
              <MaterialUISwitch />
            }
            label="Flash lumineux"
          />
          <Divider style={{ backgroundColor: '#424242' }} />
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
                width: '100%',
                height: '2%',
                bgcolor: '#16C60C'
              }}
              style={{
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px'
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
          bgcolor: 'background.paper',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: 'primary.main'
        }}
        className='mb-3 p-3 grow border-1 rounded-lg'
      >
        <Box
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          f2
        </Box>
      </Box>
    </Container>
  );
}

export default Torch;