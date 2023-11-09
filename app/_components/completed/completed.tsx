import Image from 'next/image';

export default function Completed() {
  return (
    <section className='completed-form'>
      <div>
        <Image
          src={`images/icon-complete.svg`}
          alt='completed tick icon'
          width={0}
          height={0}
          sizes='100vw'
          className='completeIcon'
        />
        <h1>Thank You!</h1>
        <p>{`We've added your card details`}</p>
        <button className='card-button'>Continue</button>
      </div>
    </section>
  );
}
