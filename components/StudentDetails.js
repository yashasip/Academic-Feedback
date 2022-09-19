import { useState } from "react";
import Button from "../components/Button.js";
import TextField from "../components/TextField";

import styles from "../styles/Board.module.css";
import layout from "../styles/Grid.module.css";

export default function StudentDetails(props) {
  const [studentDetails, setStudentDetails] = useState({
    student_id: "",
    semester: ""
  });

  const onChange = (e) => {
    setStudentDetails({ ...studentDetails, [e.target.id]: e.target.value });
  }

  const submitDetails = () => {
    props.fetchDataHandle({
      OS: "Teacher1",
      DC: "Teacher2",
      ATC: "Teacher3",
      MIV: "Teacher4",
      ADE: "Teacher5",
    }); // test values
  };

  return (
    <>
      <section className={styles.detailsBoard}>
        <p className={styles.heading}>Student Details</p>
        <hr className={styles.tendi} />
        <form className={layout.studentFormGrid}>
          <TextField
            id="student_id"
            labelText="ID"
            readOnly={props.studentVerified}
            onChange={onChange}
          />
          <TextField
            id="semester"
            labelText="Semester"
            readOnly={props.studentVerified}
          />

          {props.studentVerified ? null : ( // button disappears after submission
            <Button
              type="submit"
              text="Submit"
              onClick={() => submitDetails()}
              layout={layout.gridColSpanTwo}
            />
          )}
        </form>
      </section>
    </>
  );
}
