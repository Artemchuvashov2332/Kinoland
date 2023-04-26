import { IconButton, styled } from '@mui/material';

export const StyledIconButtonPrev = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: '-8px',
  top: '50%',
  transform: 'translateY(-50%)',
}));

export const StyledIconButtonNext = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: '-8px',
  top: '50%',
  transform: 'translateY(-50%)',
}));
