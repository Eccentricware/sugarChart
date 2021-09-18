import Head from 'next/head';
import Image from 'next/image';

import LogIn from '../components/LogIn';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Sugar Chart</title>
        <meta name='description' content='Generated by create next app' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>

      <main>
        <LogIn/>
      </main>
    </div>
  );
}
