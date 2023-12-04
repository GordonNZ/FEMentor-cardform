import { useState } from 'react';
import Completed from '../completed/completed';
import Details from '../details/details';

interface CardErrors {
  cardName: string;
  cardNumbers: string;
  cardMonth: string;
  cardYear: string;
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
    cardMonth: '',
    cardYear: '',
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
    } else {
      return /^\d{2}$/.test(year);
    }
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

  const handleNameInput = (name: string) => {
    console.log('name is working');
    if (validateName(name)) {
      console.log('name input pass');
      // setErrors({ ...errors, cardName: '' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardName: '',
      }));
    } else {
      console.log('name input fail');
      // setErrors({ ...errors, cardName: 'Wrong format, must be 2 names' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardName: 'Wrong format, must be 2 names',
      }));
    }
  };
  const handleNumberInput = (numbers: string) => {
    if (validateNumbers(numbers)) {
      console.log('pass');
      // setErrors({ ...errors, cardNumbers: '' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumbers: '',
      }));
    } else {
      // setErrors({ ...errors, cardNumbers: 'Wrong format, numbers only' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumbers: 'Wrong format, numbers only',
      }));
    }
  };
  const handleMonthInput = (month: string) => {
    if (validateMonth(month)) {
      console.log('pass');
      // setErrors({ ...errors, cardDate: '' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardMonth: '',
      }));
    } else {
      // setErrors({
      //   ...errors,
      //   cardDate: 'Wrong format, must be 2 numbers and a valid month',
      // });

      setErrors((prevErrors) => ({
        ...prevErrors,
        cardMonth: 'Wrong format, must be 2 numbers and a valid month',
      }));
    }
  };
  const handleYearInput = (year: string) => {
    if (validateYear(year)) {
      console.log('pass');
      // setErrors({ ...errors, cardDate: '' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardYear: '',
      }));
    } else {
      // setErrors({ ...errors, cardDate: 'Wrong format, must be 2 numbers' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardYear: 'Wrong format, must be 2 numbers',
      }));
    }
  };
  const handleCVCInput = (code: string) => {
    console.log('code is working');
    if (validateCode(code)) {
      console.log('pass');
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardCode: '',
      }));
    } else {
      // setErrors({ ...errors, cardCode: 'Wrong format, must be 3 numbers' });
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardCode: 'Wrong format, must be 3 numbers',
      }));
    }
  };
  const handleInput = () => {
    handleNameInput(cardDetails.name);
    handleNumberInput(cardDetails.numbers);
    handleMonthInput(cardDetails.month);
    handleCVCInput(cardDetails.code);
    handleYearInput(cardDetails.year);
  };

  const handleFormValidate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isNameValid = validateName(cardDetails.name);
    const isNumbersValid = validateNumbers(cardDetails.numbers);
    const isMonthValid = validateMonth(cardDetails.month);
    const isYearValid = validateYear(cardDetails.year);
    const isCodeValid = validateCode(cardDetails.code);

    handleInput();

    console.log(cardDetails);
    console.log(errors);

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
    <>
      {validated ? (
        <Completed />
      ) : (
        <Details errors={errors} handleFormValidate={handleFormValidate} />
      )}
    </>
  );
}
