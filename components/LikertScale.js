import RatingSlider from "./RatingSlider";

import styles from "../styles/LikertScale.module.css"

const LikertScale = (props) => {
    return (
        <div className={styles.likertScaleSpace}>
            <label htmlFor={props.id} className={styles.question}>{props.question}</label>
            <RatingSlider id={props.id} />
        </div>  
    );
}

export default LikertScale;