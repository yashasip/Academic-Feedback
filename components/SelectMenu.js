import styles from "../styles/SelectMenu.module.css";
import labelStyle from "../styles/Board.module.css";

const SelectMenu = (props) => {
  return (
    <div className={styles.label}>
      <label htmlFor={props.id} className={labelStyle.labelText}>
        {props.labelText}
      </label>
      <select
        id={props.id}
        name={props.id}
        className={styles.selectMenu}
        onChange={(e) => props.onChange(e)}
        disabled={props.disabled}
      >
        {props.choices.map((choice, i) => (
          <option key={i+1} value={choice}>{choice}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
