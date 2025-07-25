import { styled } from '@mui/material/styles'
import { Typography, Button, Box } from '@mui/material'

export const CountdownContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  // borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f0f0',
  boxShadow: theme.shadows[3],
  fontFamily: theme.typography.fontFamily,
  minWidth: 300,
  margin: theme.spacing(2),
  position: 'relative',
}))

export const DialWrapper = styled(Box)(({ theme }) => ({
  width: 280,
  height: 280,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#e0e0e0',
  boxShadow: theme.shadows[6],
  position: 'relative',
  overflow: 'hidden',
}))

export const CenteredTimeContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
}))

export const TimeInput = styled('input')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  fontSize: '4.0rem',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  fontFamily: 'monospace',
  width: '2.5ch',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '&[type=number]': {
    '-moz-appearance': 'textfield',
  },
}))

export const TimeDisplaySpan = styled(Typography)(({ theme }) => ({
  fontSize: '4.0rem',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  fontFamily: 'monospace',
  letterSpacing: '-0.03em',
  lineHeight: 1,
}))

export const TimeSeparator = styled(Typography)(({ theme }) => ({
  fontSize: '4.0rem',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  fontFamily: 'monospace',
  lineHeight: 1,
  padding: '0 6px',
}))

export const ControlButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  // borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(1.5, 4),
  minWidth: 120,
  textTransform: 'none',
  fontWeight: 'bold',
  boxShadow: theme.shadows[1],
  '&:hover': {
    boxShadow: theme.shadows[3],
  },
  '&.MuiButton-containedSecondary': {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
  '&.MuiButton-containedPrimary': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    }
  }
}))

export const CircularProgressSVG = styled('svg')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  height: '100%',
  zIndex: 1,
}))
