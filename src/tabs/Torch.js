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
          mb: '12px',
          p: '12px',
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