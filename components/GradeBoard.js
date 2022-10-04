import SelectMenu from "../components/SelectMenu";
import LikertScale from "./LikertScale";
import Button from "./Button";

import { questions, defaultRating } from "../constants/constants.js";

import styles from "../styles/Board.module.css";
import layout from "../styles/Grid.module.css";
import { useState, useRef } from "react";

const getFirst = (object) => {
  for (let key in object) return key;
};

export default function GradeBoard(props) {
  let batchIds = [];
  let batches = props.batchData;
  let initialBatchFeedback = {};

  let count = 0;
  for (let key in props.batchData) {
    // creates list of subjects and teachers
    batchIds[count++] = key;
    let batchFeed = {};
    for (let i = 0; i < questions.length; i++)
      batchFeed["Q" + (i + 1)] = defaultRating + 1;

    initialBatchFeedback[key] = batchFeed;
  }

  const selectMenuRef = useRef();
  const [currentBatch, setCurrentBatch] = useState(getFirst(batches));
  const [batchFeedback, setBatchFeedback] = useState(initialBatchFeedback);

  const setRating = (question, rating) => {
    setBatchFeedback({
      ...batchFeedback,
      [currentBatch]: {
        ...batchFeedback[currentBatch],
        [question]: parseInt(rating),
      },
    });
    console.log(batchFeedback);
  };

  const getSubjects = () => {
    let subjects = [];
    for (let key in batches) {
      subjects.push(batches[key]["subject"]);
    }
    return subjects;
  };

  const getBatchId = (subject) => {
    for (let key in batches) {
      if (batches[key]["subject"] === subject) return key;
    }
  };

  console.log(batches);

  const submitFeedbacks = async () => {
    if (!window.navigator.onLine) {
      props.popupCallback(false, "No Internet Connection");
      return;
    }
    console.log("Submitting feedback...");

    fetch("http://127.0.0.1:8000/api/feedback/submit_feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ["feedback_data"]: batchFeedback[currentBatch],
        ["batch_id"]: currentBatch.toString(),
        ["student_id"]: props.studentId,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json["status"] === "success") {
          selectMenuRef.current.removeOption();
          if (selectMenuRef.current.isEmpty()) {
            location.href += "LastPage";
          } else {
            setCurrentBatch(
              getBatchId(selectMenuRef.current.getCurrentValue())
            );
            window.scrollTo(0, 0);
            props.popupCallback(true, json["message"]);
          }
        } else {
          props.popupCallback(false, json["message"]);
        }
      })
      .catch((error) => {
        switch (error.name) {
          case "TypeError":
            props.popupCallback(
              false,
              "Server is Disconnected! Contact Server Admin"
            );
            break;
          default:
            console.log(error);
            break;
        }
      });
  };

  return (
    <>
      <section className={styles.gradeBoard}>
        <p className={styles.heading}>Grade Academic Performance</p>
        <hr className={styles.tendi} />
        <SelectMenu
          id="subject"
          labelText="Subject:"
          choices={getSubjects()}
          onChange={(e) => {
            setCurrentBatch(getBatchId(e.target.value));
          }}
          ref={selectMenuRef}
        />
        <p className={styles.labelText}>
          Teacher: {batches[currentBatch]["teacher"]}{" "}
        </p>
        <hr className={styles.fullTendi} />
        <ol className={styles.questionSpace}>
          {questions.map((question, i) => (
            <li key={i}>
              <LikertScale
                id={"Q" + (i + 1)}
                question={question}
                ratingCallback={setRating}
                ratingValue={batchFeedback[currentBatch]["Q" + (i + 1)]}
              />
              <hr className={styles.fullTendi} />
            </li>
          ))}
        </ol>
        <Button
          type="submit"
          text="Submit"
          layout={layout.flexCenter}
          onClick={submitFeedbacks}
        />
      </section>
    </>
  );
}
