import { useState } from "react";

import RatingSlider from "./RatingSlider";

import { defaultRating } from "../constants/constants";

import styles from "../styles/LikertScale.module.css";

const LikertScale = (props) => {
  const [ratingValue, setRatingValue] = useState(defaultRating + 1);

  const onChange = (e) => {
    let index = parseInt(e.target.id.slice(1));
    props.ratingCallback(e.target.id, e.target.value);
  };

  return (
    <div className={styles.likertScaleSpace}>
      <label htmlFor={props.id} className={styles.question}>
        {props.question}
      </label>
      <RatingSlider
        id={props.id}
        onChange={onChange}
        value={props.ratingValue}
      />
    </div>
  );
};

export default LikertScale;
