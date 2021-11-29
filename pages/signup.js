import Head from 'next/head';

import PageTemplate from '../components/PageTemplate';
import SignUp from '../components/SignUp/SignUp.jsx';

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>Sugar Chart Home</title>
        <meta name='description' content='Welcome to Sugar Chart! Please sign up to use its features!' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <main>
        <PageTemplate title='Sign Up' header={false} content={<SignUp />} />
      </main>
    </div>
  )
}

export default SignUpPage;