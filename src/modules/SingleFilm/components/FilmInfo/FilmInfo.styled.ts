import { Box, Stack, styled } from '@mui/material';

export const StyledInfoText = styled('span')({
  marginLeft: '15px',
});

export const StyledFilmImageBox = styled(Box)({
  width: '350px',
  maxHeight: '600px',
  boxShadow: '0 0 10px #000',
  borderRadius: '16px',
  overflow: 'hidden',
});

export const StyledFilmInfoStack = styled(Stack)({
  width: '40%',
  flexGrow: '1',
  gap: '40px',
  marginLeft: '60px',
});
