import Head from 'next/head';
import { useState } from 'react';

import GradeBoard from '../components/GradeBoard';
import Header from '../components/Header';
import StudentDetails from '../components/StudentDetails';

import styles from '../styles/Home.module.css';
import layout from '../styles/Grid.module.css';

export default function Home() {
  const [studentVerified, setVerified] = useState(false);

  const [batchData, setBatchData] = useState({});
  function getData(fetchedData) {
    setBatchData(fetchedData)
    console.log(batchData);
    setVerified(true); // display GradeBoard
  }

  return (
    <div>
      <Head>
        <title>Academic Feedback</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={layout.formGrid}>
          <StudentDetails studentVerified={studentVerified} fetchDataHandle={ getData } /> 
          {studentVerified ? // display GradeBoard only after submission accepted
            <GradeBoard batchData={ batchData } /> : null
          }
        </div>
      </main>
    </div>
  );
}
