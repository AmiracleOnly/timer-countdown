import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';


export const CountdownContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: <number>theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f0f0f0',
  boxShadow: theme.shadows[3],
  fontFamily: theme.typography.fontFamily,
  minWidth: 300,
  margin: theme.spacing(2),
  position: 'relative',
}));

export const ControlButtons = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  }));

  export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: <number>theme.shape.borderRadius * 3,
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
  }));
