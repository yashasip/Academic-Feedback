import styles from "../styles/SelectMenu.module.css"
import labelStyle from "../styles/Board.module.css"

const SelectMenu = (props) => {
  return (
      <div className={styles.label}>
      <label htmlFor={props.id} className={labelStyle.labelText}>{props.labelText}</label>
      <select id={props.id} name={props.id} className={styles.selectMenu}>
        {props.choices.map((choice) => (
          <option value={choice}>{choice}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
