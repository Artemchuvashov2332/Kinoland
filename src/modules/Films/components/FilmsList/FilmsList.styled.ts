import { Box, Typography, styled } from '@mui/material';

export const StyledLoaderBox = styled(Box)({
  display: 'inline-flex',
  justifyContent: 'center',
  width: '100%',
});

export const StyledBoxItem = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  overflowX: 'auto',
  overflowY: 'hidden',
  '&::-webkit-scrollbar': {
    height: '10px',
    zIndex: '0',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'rgb(179, 179, 179)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    background: 'linear-gradient(90deg, #d9fb00, #eac700)',
  },
});

export const StyledCategoryName = styled(Typography)({
  position: 'sticky',
  left: '0px',
});
