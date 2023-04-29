import { Box, Button, Stack, styled } from '@mui/material';

export const StyledBannerContainer = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: '423px auto',
  justifyItems: 'center',
  padding: '16px',
  position: 'relative',
  borderRadius: '24px',
  background: 'rgb(39 39 42)',
});

export const StyledDescriptionStack = styled(Stack)({
  gridColumn: 'span 6',
  width: '80%',
  justifyContent: 'space-around',
  margin: '10px 0',
});

export const StyledInfoText = styled('span')({
  marginLeft: '15px',
});

export const StyledLinkButton = styled(Button)({
  gridColumn: 'span 6',
  alignSelf: 'center',
  width: '80%',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgb(75 0 130)',
  padding: '8px 15px',
  borderRadius: '6px',
});

export const StyledFilmPoster = styled(Box)({
  width: '300px',
  height: '450px',
  gridColumn: 'span 6',
  gridRow: 'span 2',
  alignSelf: 'center',
  boxShadow: '0 0 10px #000',
  borderRadius: '16px',
  overflow: 'hidden',
});
