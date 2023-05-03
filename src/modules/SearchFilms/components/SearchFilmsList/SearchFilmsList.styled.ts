import { Box, styled } from '@mui/material';

export const StyledLoaderBox = styled(Box)({
  display: 'inline-flex',
  justifyContent: 'center',
  width: '100%',
});

export const StyledLoaderCenterScreen = styled(Box)({
  position: 'fixed',
  top: '50vh',
  left: '50vw',
  transform: 'translate(-50%, -50%)',
});
