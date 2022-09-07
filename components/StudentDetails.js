import Button from "../components/Button.js";
import TextField from "../components/TextField";

import styles from "../styles/StudentDetails.module.css";
import layout from "../styles/Grid.module.css";

export default function StudentDetails() {
  return (
    <>
      <section className={styles.detailsBoard}>
        <p className={styles.heading}>Student Details</p>
        <hr className={styles.tendi} />
        <form className={layout.studentFormGrid}>
          <TextField id="studentId" labelText="ID"/>
          <TextField id="academicYear" labelText="Academic Year"/>
          <TextField id="section" labelText="Section"/>
          <TextField id="semester" labelText="Semester"/>
          <Button type="submit" text="Submit" layout={layout.gridColSpanTwo} />
        </form>
      </section>
    </>
  );
}
