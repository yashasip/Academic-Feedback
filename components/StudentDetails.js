import "../styles/StudentDetails.module.css";

export const StudentDetails = () => {
  return (
    <div id="full">
      <h2 id="heading">Academic Feedback</h2>
      <br />
      <form>
        <fieldset>
          <legend>&emsp;Student Details:</legend>
          <label for name="id">
            ID
          </label>
          <input id="id" type="text" name="id" />
          <label for name="year">
            Year
          </label>
          <input id="year" type="text" name="year" />
          <br />
          <label for name="sec">
            Sec
          </label>
          <input id="sec" type="text" name="sec" />
          <label for name="sem">
            Sem
          </label>
          <input id="sem" type="text" name="sem" />
        </fieldset>
      </form>
    </div>
  );
};
