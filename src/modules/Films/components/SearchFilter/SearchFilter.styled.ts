import { Box, Button, ButtonGroup, ListItem, Stack, styled } from '@mui/material';

export const StyledFilterBar = styled(ButtonGroup)({
  width: '50%',
  backgroundColor: 'rgb(39 39 42)',
  borderRadius: '20px',
  gap: '10px',
  position: 'relative',
  transition: 'all .3s ease',

  '&:hover': {
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  },
  '&:hover .filter-menu': {
    top: '100%',
    height: 'auto',
    visibility: 'visible',
    opacity: 1,
    backgroundColor: '#3c3c40',
    zIndex: '10',
  },
});

export const StyledFilterButton = styled(Button)({
  flexGrow: 1,
  '&:hover': {
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
  },
});

export const StyledFilterMenu = styled(Stack)({
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
});

export const StyledListCategory = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const StyledListItemCategory = styled(ListItem)({
  width: 'auto',
});
