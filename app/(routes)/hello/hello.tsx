import Link from 'next/link';
import './hello.css';

export default function Hello() {
  return (
    <main className='hello'>
      <h1>This is the hello Page!</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </main>
  );
}
