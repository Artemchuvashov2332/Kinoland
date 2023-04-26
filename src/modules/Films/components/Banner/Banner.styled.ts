import { Box, Button, Stack, Typography, styled } from '@mui/material';

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
  justifyContent: 'space-between',
  margin: '10px 0',
});

export const StyledInfoTypography = styled(Typography)({
  width: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const StyledDescription = styled(Box)({
  height: '50%',
  overflow: 'hidden',
  marginBottom: '15px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0px',
    right: '0px',
    bottom: '0px',
    height: '55px',
    background: 'linear-gradient(180deg, transparent, rgb(39 39 42) 50%)',
  },
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
