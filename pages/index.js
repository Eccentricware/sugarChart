import Head from 'next/head';
import Image from 'next/image';

import PageTemplate from '../components/PageTemplate';
import LogIn from '../components/LogIn';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Sugar Chart</title>
        <meta name='description' content='Track your glucose levels with a list and a chart!' />
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
        <PageTemplate header={false} content={<LogIn/>}/>
      </main>
    </div>
  );
}
