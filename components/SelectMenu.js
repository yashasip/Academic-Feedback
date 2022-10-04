import styles from "../styles/SelectMenu.module.css";
import labelStyle from "../styles/Board.module.css";
import { useImperativeHandle, useState,useRef, forwardRef } from "react";

const SelectMenu = ({ id, labelText, disabled, choices, onChange }, ref ) => {
  const [options, setOptions] = useState(choices);
  const selectRef = useRef();
  
  useImperativeHandle(ref, () => {
    return {
      removeOption: () => {
        console.log(selectRef.current.options);
        selectRef.current.options.remove(selectRef.current.selectedIndex);
      },
      isEmpty: () => {
        if (selectRef.current.options.length == 0) return true;
        return false;
      },
      getCurrentValue: () => {
        return selectRef.current.value;
      }
    };
  },[]);

  return (
    <div className={styles.label} ref={ref}>
      <label htmlFor={id} className={labelStyle.labelText}>
        {labelText}
      </label>
      <select
        id={id}
        name={id}
        className={styles.selectMenu}
        onChange={(e) => onChange(e)}
        disabled={disabled}
        ref={selectRef}
      >
        {options.map((choice, i) => (
          <option key={i + 1} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef(SelectMenu);
