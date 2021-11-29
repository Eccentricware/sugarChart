import Head from 'next/head';

import PageTemplate from '../components/PageTemplate';
import Menu from '../components/Menu';

export default function MenuPage() {

  return (
    <div>
      <Head>
        <title>Sugar Chart Home</title>
        <meta name='description' content='Welcome to the main menu! Select between adding or viewing readings and editing your info.' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <main>
        <PageTemplate title='Home' content={<Menu/>}/>
      </main>
    </div>
  );
}
