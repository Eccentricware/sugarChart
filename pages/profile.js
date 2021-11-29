import Head from 'next/head';

import PageTemplate from '../components/PageTemplate';
import Profile from '../components/Profile';

export default function ProfilePage() {

  return (
    <div>
      <Head>
        <title>Sugar Chart</title>
        <meta name='description' content='View and Edit Your Profile' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='icon' href='/favicon.ico' />
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
        <PageTemplate title="Profile" content={<Profile/>}/>
      </main>
    </div>
  );
}
