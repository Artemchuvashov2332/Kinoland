import { PropsWithChildren } from 'react';

export interface ICaroselProps extends PropsWithChildren {
  height: string;
  width: string;
  arrow: boolean;
  dots: boolean;
  autoPlay?: boolean;
  autoPlayTime: number;
}
