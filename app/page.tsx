'use client';
import Image from 'next/image';
import styles from './page.module.css';
import './home.css';
import { useState, createContext } from 'react';
import Form from './_components/form/form';
import { CardContextProvider, cardContext } from './cardContext';

// type CardData = {
//   numbers: string;
//   name: string;
//   month: string;
//   year: string;
//   code: string;
// };

// type CardContextProps = {
//   cardDetails: CardData;
//   setCardDetails: React.Dispatch<React.SetStateAction<CardData>>;
// };

// const defaultCardDetails: CardData = {
//   numbers: '0000 0000 0000 0000',
//   name: 'Jane Appleseed',
//   month: '00',
//   year: '00',
//   code: '000',
// };

// export const cardContext = createContext<CardContextProps>({
//   cardDetails: defaultCardDetails,
//   setCardDetails: () => {},
// });

// interface HomeProps {
//   children: JSX.Element; // Specify the type you expect for children
// }

export default function Home() {
  // const [cardDetails, setCardDetails] = useState<CardData>(defaultCardDetails);

  return (
    <CardContextProvider>
      <main className='cards-main'>
        <div className='cards-background'>
          <div className='cards-img-container'>
            <div className='backCard-container'>
              <Image
                src={`/images/bg-card-back.png`}
                alt='back card illustration'
                width={0}
                height={0}
                sizes='100vw'
                // style={{ width: '20vw', height: 'auto' }}
                className='backCard'
              />
              <cardContext.Consumer>
                {(context) => (
                  <p className='card-cvc'>{context.cardDetails.code}</p>
                )}
              </cardContext.Consumer>
            </div>
            <div className='frontCard-container'>
              <Image
                src={`/images/bg-card-front.png`}
                alt='front card illustration'
                width={0}
                height={0}
                sizes='100vw'
                // style={{ width: '20vw', height: 'auto' }}
                className='frontCard'
              />
              <Image
                src={`/images/card-logo.svg`}
                alt='card logo'
                width={0}
                height={0}
                sizes='100vw'
                className='cardLogo'
              />
              <cardContext.Consumer>
                {(context) => (
                  <>
                    <Image
                      src={`/images/card-logo.svg`}
                      alt='card logo'
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='cardLogo'
                    />
                    <p className='card-numbers'>
                      {context.cardDetails.numbers}
                    </p>
                    <p className='card-name'>{context.cardDetails.name}</p>
                    <p className='card-date'>
                      {context.cardDetails.month}/{context.cardDetails.year}
                    </p>
                  </>
                )}
              </cardContext.Consumer>
            </div>
          </div>
        </div>
        {/* <cardContext.Provider value={{ cardDetails, setCardDetails }}> */}
        <cardContext.Consumer>
          {(context) => (
            <Form
              cardDetails={context.cardDetails}
              setCardDetails={context.setCardDetails}
            />
          )}
        </cardContext.Consumer>
        {/* </cardContext.Provider> */}
      </main>
    </CardContextProvider>
  );
}
