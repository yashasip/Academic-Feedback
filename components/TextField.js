import styles from "../styles/TextField.module.css";

const TextField = (props) => {
  return (
    <div className={styles.textFieldSpace}>
      <label htmlFor={props.id} className={styles.textFieldLabel}>
        {props.labelText}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        maxLength="50"
        readOnly={props.readOnly}
        required={props.required}
        className={styles.textField}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  );
};

export default TextField;
