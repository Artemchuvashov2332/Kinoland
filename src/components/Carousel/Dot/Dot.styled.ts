import { styled } from '@mui/material';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

type StyledDotButtonProps = {
  selected: boolean;
};

export const StyledDotButton = styled(FiberManualRecordOutlinedIcon, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<StyledDotButtonProps>(({ theme, selected }) => ({
  ...(selected && {
    color: theme.palette.success.main,
  }),
  ...(!selected && {
    color: theme.palette.grey[700],
  }),
}));
