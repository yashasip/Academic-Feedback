import Head from 'next/head';
import { useState } from 'react';

import GradeBoard from '../components/GradeBoard';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import StudentDetails from '../components/StudentDetails';

import styles from '../styles/Home.module.css';
import layout from '../styles/Grid.module.css';
import PopupNotifier from '../components/PopupNotifier';

export default function Home() {
  const [studentId, setStudentId] = useState("");
  const [studentVerified, setVerified] = useState(false);
  const [popup, setPopup] = useState({ popped: false, message: "", isSuccess:true});

  const [batchData, setBatchData] = useState({});
  function getData(fetchedData, studentId) {
    setStudentId(studentId)
    setBatchData(fetchedData)
    setVerified(true); // display GradeBoard
  }

  const popDown = () => {
    setTimeout(() => setPopup({...popup, popped: false}), 3000);
  }

  const popUp = (isSuccess, message) => {
    setPopup({popped: true, message: message, isSuccess:isSuccess});
  }

  return (
    <div>
      <Head>
        <title>Academic Feedback</title>
      </Head>

      <main className={styles.main}>
        {popup.popped && (
          <PopupNotifier
            message={popup.message}
            isSuccess={popup.isSuccess}
            popdownCallback={popDown}
          />
        )}
        <Header />
        <div className={layout.formGrid}>
          <StudentDetails
            studentVerified={studentVerified}
            fetchDataHandle={getData}
            popupCallback={popUp}
          />
          {studentVerified ? ( // display GradeBoard only after submission accepted
            <GradeBoard
              batchData={batchData}
              studentId={studentId}
              popupCallback={popUp}
            />
          ) : null}
        </div>
        <Footer/>
      </main>
    </div>
  );
}
