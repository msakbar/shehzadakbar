
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { OrganizationSwitcher,UserButton } from '@clerk/nextjs'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            go to sign-in for local paths <a href='/sign-in'>here</a>
            </p>
            <p>
            go to sign-up for local paths <a href='/sign-up'>here</a>
            </p>
            <p>
            go to sign-in for accounts here PROD <a href='https://accounts.shehzadakbar.com/sign-in'>here</a>
          </p>
          <p>
            go to sign-in for accounts here DEV <a href='https://viable-catfish-33.accountsstage.dev/sign-in'>here</a>
          </p>
          <p>
            go to sign-up for accounts here DEV <a href='https://viable-catfish-33.accountsstage.dev/sign-up'>here</a>
          </p>
          <div>
          <UserButton />
          </div>
          <div>
            <OrganizationSwitcher/>
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;
