import styles from '../styles/Button.module.css';

const Button = (props) => {
  return (
    <div className={props.layout}>
      <button
        type={props.type ? props.type : "button"}
        className={styles.button}
      >
        {" "}
        {props.text}{" "}
      </button>
    </div>
  );
};

export default Button;
