import { useContext } from 'react';
import { cardContext } from '../../page';

interface ErrorsProp {
  cardName: string;
  cardNumbers: string;
  cardDate: string;
  cardCode: string;
}

interface DetailsProps {
  handleFormValidate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  errors: ErrorsProp;
}

export default function Details({ errors, handleFormValidate }: DetailsProps) {
  const { cardDetails, setCardDetails } = useContext(cardContext);

  return (
    <section className='card-details'>
      <form className='card-form'>
        <label>Cardholder Name</label>
        <input
          placeholder='e.g. Jane Appleseed'
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardDetails({ ...cardDetails, name: e.target.value })
          }
          className={errors.cardName ? 'input-error' : ''}
        ></input>
        <span className='error'>{errors.cardName}</span>

        <label>Card Number</label>
        <input
          placeholder='e.g. 1234 5678 9123 0000'
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCardDetails({ ...cardDetails, numbers: e.target.value })
          }
          className={errors.cardNumbers ? 'input-error' : ''}
        ></input>
        <span className='error'>{errors.cardNumbers}</span>
        <div className='card-date-cvc-container'>
          <div className='card-date-container'>
            <label>Exp. Date (mm/yy)</label>
            <div className='card-date-input-container'>
              <input
                placeholder='MM'
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCardDetails({ ...cardDetails, month: e.target.value })
                }
                className={errors.cardDate ? 'input-error' : ''}
              ></input>
              <input
                placeholder='YY'
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCardDetails({ ...cardDetails, year: e.target.value })
                }
                className={errors.cardDate ? 'input-error' : ''}
              ></input>
            </div>
            <span className='error'>{errors.cardDate}</span>
          </div>
          <div className='card-cvc-container'>
            <label>CVC</label>
            <input
              placeholder='e.g. 123 '
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCardDetails({ ...cardDetails, code: e.target.value })
              }
              className={errors.cardCode ? 'input-error' : ''}
            ></input>
            <span className='error'>{errors.cardCode}</span>
          </div>
        </div>
        <button className='card-button' onClick={handleFormValidate}>
          Confirm
        </button>
      </form>
    </section>
  );
}
