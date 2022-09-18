import Head from 'next/head';
import GradeBoard from '../components/GradeBoard';
import Header from '../components/Header';
import StudentDetails from '../components/StudentDetails';

import styles from '../styles/Home.module.css';
import layout from '../styles/Grid.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Academic Feedback</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={layout.formGrid}>
          <StudentDetails />
          <GradeBoard />
        </div>
      </main>
    </div>
  );
}
