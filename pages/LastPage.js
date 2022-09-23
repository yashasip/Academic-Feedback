import React, { useEffect, useRef } from "react";
import { createRef } from "react";

import lottie from "lottie-web";
import * as checkAnimData from "../data/checkAnim.json";

import styles from "../styles/LastPage.module.css";
import Header from "../components/Header";

const LastPage = (props) => {
  const checkContainer = useRef();
  useEffect(() => {
    const checkAnim = lottie.loadAnimation({
      container: checkContainer.current,
      animationData: checkAnimData,
      renderer: "svg",
      loop: false,
      autoplay: true,
    });
    return () => checkAnim.destroy();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.response}>
        <h3>
          Your feedback has been recorded.
          <div>Thank you!</div>
          <div ref={checkContainer} className={styles.checkAnim} />
        </h3>
        {}
      </div>
    </>
  );
};

export default LastPage;
