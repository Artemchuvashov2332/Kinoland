import { Box, Button, Stack, styled } from '@mui/material';

interface IStyledFilterMenuProps {
  isOpen: boolean;
}

export const StyledFilterBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<IStyledFilterMenuProps>(({ isOpen }) => ({
  width: '70%',
  backgroundColor: 'rgb(39 39 42)',
  borderRadius: '20px',
  position: 'relative',
  transition: 'all .3s ease',

  '&:hover': {
    ...(isOpen && {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
    }),
  },
}));

export const StyledFilterMenu = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<IStyledFilterMenuProps>(({ isOpen }) => ({
  width: '100%',
  height: '0px',
  fontSize: '1rem',
  visibility: 'hidden',
  opacity: 0,
  position: 'absolute',
  top: '80%',
  left: '0',
  backgroundColor: 'rgb(39 39 42)',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  transition: 'all .2s ease',
  padding: '10px',
  ...(isOpen && {
    top: '100%',
    height: 'auto',
    visibility: 'visible',
    opacity: 1,
    backgroundColor: '#3c3c40',
    zIndex: '10',
  }),
}));

export const StyledListCategory = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const StyledListItemCategory = styled(Box)({
  width: 'auto',
  padding: '4px 8px',
});

export const StyledButton = styled(Button)({
  color: 'inherit',
  minWidth: 'auto',
  padding: '4px 8px',
  fontWeight: '500',
  fontSize: '0.8125rem',
  lineHeight: '1.75',
  letterSpacing: '0.02857em',
  textTransform: 'uppercase',
});
