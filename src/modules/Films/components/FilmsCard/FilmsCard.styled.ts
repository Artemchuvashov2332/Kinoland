import { ButtonBase, styled } from '@mui/material';

export const ImageButton = styled(ButtonBase)({
  height: '265px',
  width: '180px',
  borderRadius: '12px',
  transition: 'all .5s ease',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});
