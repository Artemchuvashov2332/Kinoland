import { Box, styled } from '@mui/material';

export const FilmCardBox = styled(Box)({
  position: 'relative',
  cursor: 'pointer',
  transition: 'all .5s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

export const FilmRating = styled(Box)({
  position: 'absolute',
  top: '11px',
  right: '11px',
  textAlign: 'center',
  backgroundColor: 'darkgreen',
  padding: '2px 5px',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '10px',
});

export const FilmImage = styled('img')({
  height: '265px',
  width: '180px',
  borderRadius: '12px',
});
