import { useState } from 'react';

interface CardErrors {
  cardName: string;
  cardNumbers: string;
  cardDate: string;
  cardCode: string;
}
interface CardDetails {
  numbers: string;
  name: string;
  month: string;
  year: string;
  code: string;
}
interface FormProps {
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetails>>;
  cardDetails: CardDetails;
}

export default function Form({ setCardDetails, cardDetails }: FormProps) {
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState<CardErrors>({
    cardName: '',
    cardNumbers: '',
    cardDate: '',
    cardCode: '',
  });

  const validateName = (name: string) => {
    if (name === '') {
      setCardDetails({ ...cardDetails, name: 'Jane Appleseed' });
    }
    console.log(`testing: ${name}`);
    return /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  };
  const validateNumbers = (numbers: string) => {
    if (numbers === '') {
      setCardDetails({ ...cardDetails, numbers: '0000 0000 0000 0000' });
    }
    console.log(`testing: ${numbers}`);
    return /^\d{4} \d{4} \d{4} \d{4}$/.test(numbers);
  };
  const validateMonth = (month: string) => {
    if (month === '') {
      setCardDetails({ ...cardDetails, month: '00' });
    }
    console.log(`testing: ${month}`);
    return /^(0[1-9]|1[0-2])$/.test(month);
  };
  const validateYear = (year: string) => {
    console.log(`testing: ${year}`);
    if (year === '') {
      setCardDetails({ ...cardDetails, year: '00' });
    } else if (/^\d{2}$/.test(year)) {
      return true;
    }
    return false;
  };
  const validateCode = (code: string) => {
    console.log(`testing: ${code}`);
    if (code === '') {
      setCardDetails({ ...cardDetails, code: '00' });
    } else if (/^\d{3}$/.test(code)) {
      return true;
    }
    return false;
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, name: e.target.value });
    if (validateName(e.target.value)) {
      console.log('pass');
      setErrors({ ...errors, cardName: '' });
    } else {
      setErrors({ ...errors, cardName: 'Wrong format, must be 2 names' });
    }
  };
  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, numbers: e.target.value });
    if (validateNumbers(e.target.value)) {
      console.log('pass');
      setErrors({ ...errors, cardNumbers: '' });
    } else {
      setErrors({ ...errors, cardNumbers: 'Wrong format, numbers only' });
    }
  };
  const handleMonthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, month: e.target.value });
    if (validateMonth(e.target.value)) {
      console.log('pass');
      setErrors({ ...errors, cardDate: '' });
    } else {
      setErrors({
        ...errors,
        cardDate: 'Wrong format, must be 2 numbers and a valid month',
      });
    }
  };
  const handleYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, year: e.target.value });
    if (validateYear(e.target.value)) {
      console.log('pass');
      setErrors({ ...errors, cardDate: '' });
    } else {
      setErrors({ ...errors, cardDate: 'Wrong format, must be 2 numbers' });
    }
  };
  const handleCVCInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, code: e.target.value });
    if (validateCode(e.target.value)) {
      console.log('pass');
      setErrors({ ...errors, cardCode: '' });
    } else {
      setErrors({ ...errors, cardCode: 'Wrong format, must be 3 numbers' });
    }
  };

  const handleFormValidate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isNameValid = validateName(cardDetails.name);
    const isNumbersValid = validateNumbers(cardDetails.numbers);
    const isMonthValid = validateMonth(cardDetails.month);
    const isYearValid = validateYear(cardDetails.year);
    const isCodeValid = validateCode(cardDetails.code);

    if (
      isNameValid &&
      isNumbersValid &&
      isMonthValid &&
      isYearValid &&
      isCodeValid
    ) {
      console.log('Form is filled in correctly, success screen');
      setValidated(true);
    } else {
      console.log('Something in the form is wrong');
    }
  };
  return (
    <section className='card-details'>
      <form className='card-form'>
        <label>Cardholder Name</label>
        <input
          placeholder='e.g. Jane Appleseed'
          type='text'
          onChange={handleNameInput}
          className={errors.cardName ? 'input-error' : ''}
        ></input>
        <span className='error'>{errors.cardName}</span>

        <label>Card Number</label>
        <input
          placeholder='e.g. 1234 5678 9123 0000'
          type='text'
          onChange={handleNumberInput}
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
                onChange={handleMonthInput}
                className={errors.cardDate ? 'input-error' : ''}
              ></input>
              <input
                placeholder='YY'
                type='text'
                onChange={handleYearInput}
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
              onChange={handleCVCInput}
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
