import SelectMenu from "../components/SelectMenu";
import LikertScale from "./LikertScale";
import Button from "./Button";

import { questions } from "../constants/constants.js";

import styles from "../styles/Board.module.css";
import layout from "../styles/Grid.module.css";
import { useState } from "react";

export default function GradeBoard(props) {
  let subjects = [];
  for (let key in props.batchData) {
    // creates list of subjects
    subjects.push(key);
  }

  const [teacher, setTeacher] = useState(props.batchData[subjects[0]]); // assumes batchdata is not empty.

  return (
    <>
      <section className={styles.gradeBoard}>
        <p className={styles.heading}>Grade Academic Performance</p>
        <hr className={styles.tendi} />
        <SelectMenu
          id="subject"
          labelText="Subject:"
          choices={subjects}
          onChange={(e) => setTeacher(props.batchData[e.target.value])}
        />
        <p className={styles.labelText}>Teacher: {teacher} </p>
        <hr className={styles.fullTendi} />
        <ol className={styles.questionSpace}>
          {questions.map((question) => (
            <li>
              <LikertScale question={question} />
              <hr className={styles.fullTendi} />
            </li>
          ))}
        </ol>
        <Button type="submit" text="Submit" layout={layout.flexCenter} />
      </section>
    </>
  );
}
