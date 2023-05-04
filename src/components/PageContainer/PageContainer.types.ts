import { Breakpoint } from '@mui/material';

export interface IPageContainerProps {
  children: React.ReactNode;
  maxWidth?: false | Breakpoint;
}
