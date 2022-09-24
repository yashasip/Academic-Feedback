import React, { useEffect, useRef, useState } from "react";

import lottie from "lottie-web";
import * as successAnim from "../data/successAnim.json";
import * as failAnim from "../data/FailAnim.json";

import styles from "../styles/PopupNotifier.module.css";

function PopupNotifier({ message, isSuccess, popdownCallback }) {
  const animContainer = useRef();
  useEffect(() => {
    popdownCallback();
    const animReact = lottie.loadAnimation({
      container: animContainer.current,
      animationData: isSuccess ? successAnim : failAnim,
      renderer: "svg",
      loop: false,
      autoplay: true,
    });
    return () => animReact.destroy();
  }, []);

  return (
    <div
      className={
        isSuccess ? styles.messageSpaceSuccess : styles.messageSpaceFailure
      }
    >
      <div ref={animContainer} className={styles.anim} />
      <p>{message}</p>
    </div>
  );
}

export default PopupNotifier;
