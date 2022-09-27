import { useState } from "react";
import Button from "../components/Button.js";
import TextField from "../components/TextField";
import SelectMenu from "./SelectMenu.js";

import { semesters } from "../constants/constants.js";

import styles from "../styles/Board.module.css";
import layout from "../styles/Grid.module.css";

export default function StudentDetails(props) {
  const [studentDetails, setStudentDetails] = useState({
    student_id: "",
    semester: "1",
  });

  const onChange = (e) => {
    setStudentDetails({
      ...studentDetails,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const submitDetails = async () => {
    if (studentDetails["student_id"].length === 0) {
      props.popupCallback(false, "Please enter Student ID");
      return;
    } else if (!window.navigator.onLine) {
      props.popupCallback(false, "No Internet Connection");
      return;
    }

    console.log("Requesting Student Batches...");
    fetch("http://127.0.0.1:8000/api/batch/student_batches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: studentDetails.student_id,
        semester: studentDetails.semester,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json["status"] == "success") {
          props.fetchDataHandle(json["batches"], studentDetails.student_id);
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
          {/* <SelectMenu
            id="semester"
            labelText="Semester"
            readOnly={props.studentVerified}
            choices={semesters}
            onChange={onChange}
            disabled={props.studentVerified}
          /> */}

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
