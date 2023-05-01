export interface ISearchButtonsProps {
  onClick: (type: string) => void;

  refs: [React.Ref<HTMLButtonElement>, React.Ref<HTMLButtonElement>, React.Ref<HTMLButtonElement>];
}
