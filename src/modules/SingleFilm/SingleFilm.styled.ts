import { Box, styled } from '@mui/material';

export const StyledFilmBox = styled(Box)(({ theme }) => ({
  margin: '16px 0',
  width: '100%',
  padding: '16px',
  borderRadius: '24px',
  backgroundColor: 'rgb(39 39 42)',
}));

export const StyledLoaderCenterScreen = styled(Box)({
  position: 'fixed',
  top: '50vh',
  left: '50vw',
  transform: 'translate(-50%, -50%)',
});
