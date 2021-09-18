import Head from 'next/head';

import Menu from '../components/Menu';

export default function MenuPage() {

  return (
    <div>
      <Head>
        <title>Sugar Chart</title>
        <meta name='description' content='Generated by create next app' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <main>
        <Menu/>
      </main>
    </div>
  );
}
