import Head from 'next/head';

import PageTemplate from '../components/PageTemplate';
import Charts from '../components/Charts';

export default function ChartsPage () {
  return (
    <div>
      <Head>
        <title>Sugar Chart</title>
          <meta name='description' content='Displays dynamically generated charts and tables for the readings across various timespans' />
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
        <PageTemplate title='Charts' content={<Charts/>}/>
      </main>
    </div>
  )
}