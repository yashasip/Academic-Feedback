import SelectMenu from "../components/SelectMenu";
import LikertScale from "./LikertScale";
import Button from "./Button";

import { questions } from "../constants/constants.js";

import styles from "../styles/Board.module.css";
import layout from "../styles/Grid.module.css";

const options = ["OS", "DC", "ATC", "MIV", "ADE"]; // dummy values

export default function GradeBoard() {
  return (
    <>
      <section className={styles.gradeBoard}>
        <p className={styles.heading}>Grade Academic Performance</p>
        <hr className={styles.tendi} />
        <SelectMenu id="subject" labelText="Subject:" choices={options} />
        <p className={styles.labelText}>Teacher: </p>
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
