import Head from 'next/head';
import Header from '../components/Header';
import StudentDetails from '../components/StudentDetails';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Academic Feedback</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <StudentDetails />
      </main>
    </div>
  );
}
