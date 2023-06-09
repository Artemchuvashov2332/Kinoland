import React, { TouchEvent, memo, useEffect, useState } from 'react';
import { ICaroselProps } from './Carouser.types';
import { StyledCarouselListItem, StyledCarouselBox, StyledCarouselList } from './Carousel.styled';
import { DotsList } from './DotsList/index';
import { Arrows } from './Arrows';

const CarouselProto = ({
  width,
  height,
  arrow = true,
  dots,
  autoPlay = false,
  autoPlayTime = 0,
  children,
}: ICaroselProps) => {
  const [currSlide, setCurrSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    if (!autoPlay || !autoPlayTime) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [React.Children.count(children), currSlide]);

  const changeSlide = (direction: -1 | 1 = 1) => {
    let sliderNumber: number;
    const slideLength = React.Children.count(children);

    if (currSlide + direction < 0) {
      sliderNumber = slideLength - 1;
    } else {
      sliderNumber = (currSlide + direction) % (slideLength || 1);
    }
    setCurrSlide(sliderNumber);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touchDown = event.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = event.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    if (direction < -10) {
      changeSlide(-1);
    }
    if (direction > 10) {
      changeSlide(1);
    }

    setTouchPosition(null);
  };

  const goToSlide = (s: number) => {
    const slideLength = React.Children.count(children);
    setCurrSlide(s % slideLength);
  };

  return (
    <StyledCarouselBox width={width} height={height} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <StyledCarouselList slideNumber={currSlide}>
        {React.Children.map(children, (child, i) => {
          return <StyledCarouselListItem key={i}>{child}</StyledCarouselListItem>;
        })}
      </StyledCarouselList>
      {arrow && <Arrows changeSlide={changeSlide} />}
      {dots && <DotsList currSlide={currSlide} slideLength={React.Children.count(children)} goToSlide={goToSlide} />}
    </StyledCarouselBox>
  );
};

export const Carousel = memo(CarouselProto);
