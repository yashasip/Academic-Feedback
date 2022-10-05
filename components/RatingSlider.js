import { useState } from "react";

import { ratings, defaultRating } from "../constants/constants.js";

import styles from "../styles/RatingSlider.module.css";
import labelStyle from "../styles/Board.module.css";

const RatingSlider = (props) => {
  const [ratingIndex, setRatingIndex] = useState(defaultRating);
  ratingIndex = props.value; // too coupled
  return (
    <div className={styles.ratingSliderSpace}>
      <label htmlFor={props.id} className={labelStyle.labelText}>
        {ratings[ratingIndex]}
      </label>
      <br />
      <input
        type="range"
        id={props.id}
        name={props.id}
        className={styles.ratingSlider}
        value={props.value}
        min={0}
        max={5}
        onChange={(e) => {
          setRatingIndex(e.target.value - 1);
          props.onChange(e);
        }}
      />
    </div>
  );
};

export default RatingSlider;
