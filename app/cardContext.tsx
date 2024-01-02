import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

type CardData = {
  numbers: string;
  name: string;
  month: string;
  year: string;
  code: string;
};

type CardContextProps = {
  cardDetails: CardData;
  setCardDetails: Dispatch<SetStateAction<CardData>>;
};

const defaultCardDetails: CardData = {
  numbers: '0000 0000 0000 0000',
  name: 'Jane Appleseed',
  month: '00',
  year: '00',
  code: '000',
};

export const cardContext = createContext<CardContextProps>({
  cardDetails: defaultCardDetails,
  setCardDetails: () => {},
});

type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContextProvider: React.FC<CardContextProviderProps> = ({
  children,
}) => {
  const [cardDetails, setCardDetails] = useState<CardData>(defaultCardDetails);

  return (
    <cardContext.Provider value={{ cardDetails, setCardDetails }}>
      {children}
    </cardContext.Provider>
  );
};
