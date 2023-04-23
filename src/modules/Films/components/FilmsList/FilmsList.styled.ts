import { ListItem, Typography, styled } from '@mui/material';

export const StyledListRowItem = styled(ListItem)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  overflowX: 'auto',
  overflowY: 'hidden',
});

export const StyledCategoryName = styled(Typography)({
  position: 'sticky',
  left: '0px',
});
