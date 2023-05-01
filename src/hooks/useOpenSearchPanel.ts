import { RefObject, useEffect, useState } from 'react';
import { SearchFilmTypes } from 'domains/index';
import { SEARCH_FILTER } from 'constants/searchFilmTypes';

type ElementWithTextContent = HTMLButtonElement | HTMLDivElement;

export function useOpenSearchPanel<T extends HTMLElement>(refs: RefObject<T>[]): [boolean, SearchFilmTypes] {
  const [isOpen, setIsOpen] = useState(false);
  const [targetButton, setTargetButton] = useState<SearchFilmTypes>(SEARCH_FILTER.Films);

  const on = (event: MouseEvent) => {
    if (event.target) {
      const elem: ElementWithTextContent = event.target as ElementWithTextContent;

      if (
        elem.textContent === SEARCH_FILTER.Films ||
        elem.textContent === SEARCH_FILTER.Series ||
        elem.textContent === SEARCH_FILTER.TV_Show
      ) {
        setTargetButton(elem.textContent);
      }
      setIsOpen(true);
    }
  };
  const off = () => setIsOpen(false);

  useEffect(() => {
    if (refs.some((ref) => !ref.current)) {
      return;
    }

    const nodes = refs.map((ref) => ref.current);

    nodes.forEach((node) => {
      if (node) node.addEventListener('mouseenter', on);
    });

    nodes.forEach((node) => {
      if (node) node.addEventListener('mouseleave', off);
    });

    return () => {
      nodes.forEach((node) => {
        if (node) node.removeEventListener('mouseenter', on);
      });

      nodes.forEach((node) => {
        if (node) node.removeEventListener('mouseleave', off);
      });
    };
  }, []);

  return [isOpen, targetButton];
}
