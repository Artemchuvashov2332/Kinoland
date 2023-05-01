import { Box, Typography, styled } from '@mui/material';

export const FilmCardBox = styled(Box)({
  position: 'relative',
  cursor: 'pointer',
  transition: 'all .3s ease',
  width: '180px',
  '&:hover': {
    transform: 'scale(1.15)',
  },
});

export const StyledFilmName = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
