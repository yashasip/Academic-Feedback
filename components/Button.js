import styles from '../styles/Button.module.css'

const Button = (props) => {
  return (
    <>
      <button
        type={props.type ? props.type : "button"}
        className={styles.button}
      >
        {" "}
        {props.text}{" "}
      </button>
    </>
  );
};

export default Button;
