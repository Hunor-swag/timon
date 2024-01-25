import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-screen flex flex-col justify-center items-center '>
      <h1 className='text-3xl font-semibold'>Timonkutya</h1>
      <p className='text-lg font-semibold text-blue-700'>
        Ez a világ legjobb kiskutyájának, Timonnak a weboldala.
      </p>
    </main>
  );
}
