import { Box, List, ListItem, styled } from '@mui/material';

type StyledCarouselBoxProps = {
  width: string;
  height: string;
};

export const StyledCarouselBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})<StyledCarouselBoxProps>(({ theme, width, height }) => ({
  height: height,
  width: width,
  margin: '20px auto',
  padding: '16px 0',
  position: 'relative',
  borderRadius: '24px',
  background: 'rgb(39 39 42)',
  overflow: 'hidden',
}));

type StyledCarouselListProps = {
  slideNumber: number;
};

export const StyledCarouselList = styled(List, {
  shouldForwardProp: (prop) => prop !== 'slideNumber',
})<StyledCarouselListProps>(({ theme, slideNumber }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  padding: '0px',
  transform: `translateX(-${slideNumber * 100}%)`,
  transition: 'transform 0.5s ease-in-out',
}));

export const StyledCarouselListItem = styled(ListItem)({
  width: '100%',
  flex: '0 0 auto',
  padding: '0 16px',
});
