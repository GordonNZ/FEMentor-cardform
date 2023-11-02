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
    }
  };
  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, numbers: e.target.value });
    if (validateNumbers(e.target.value)) {
      console.log('pass');
    }
  };
  const handleMonthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, month: e.target.value });
    if (validateMonth(e.target.value)) {
      console.log('pass');
    }
  };
  const handleYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, year: e.target.value });
    if (validateYear(e.target.value)) {
      console.log('pass');
    }
  };
  const handleCVCInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, code: e.target.value });
    if (validateCode(e.target.value)) {
      console.log('pass');
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
        ></input>
        <label>Card Number</label>
        <input
          placeholder='e.g. 1234 5678 9123 0000'
          type='text'
          onChange={handleNumberInput}
        ></input>
        <div className='card-date-cvc-container'>
          <div className='card-date-container'>
            <label>Exp. Date (mm/yy)</label>
            <div className='card-date-input-container'>
              <input
                placeholder='MM'
                type='text'
                onChange={handleMonthInput}
              ></input>
              <input
                placeholder='YY'
                type='text'
                onChange={handleYearInput}
              ></input>
            </div>
          </div>
          <div className='card-cvc-container'>
            <label>CVC</label>
            <input
              placeholder='e.g. 123 '
              type='text'
              onChange={handleCVCInput}
            ></input>
          </div>
        </div>
        <button className='card-button'>Confirm</button>
      </form>
    </section>
  );
}
