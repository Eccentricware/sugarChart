import Head from 'next/head';

import PageTemplate from '../components/PageTemplate';
import NewEntry from '../components/NewEntry';

export default function NewEntryPage() {

  return (
    <div>
      <Head>
        <title>New Entry</title>
        <meta name='description' content='Add a new entry given the day and time you observed them' />
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
        <PageTemplate title="New Entry" content={<NewEntry/>}/>
      </main>
    </div>
  );
}
