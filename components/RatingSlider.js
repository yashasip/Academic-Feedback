import { useState } from "react";

import { ratings, defaultRating } from "../constants/constants.js"

import styles from "../styles/RatingSlider.module.css";
import labelStyle from "../styles/Board.module.css";

const RatingSlider = (props) => {
    const [ratingIndex, setRatingIndex] = useState(defaultRating);
  return (
    <div className={styles.ratingSliderSpace}>
          <label htmlFor={props.id} className={labelStyle.labelText} >{ ratings[ratingIndex] }</label><br/>
          <input type="range" id={props.id} name={props.id} className={styles.ratingSlider} defaultValue={3} min={1} max={5} onChange={ e=> setRatingIndex(e.target.value - 1) } />
    </div>
  );
};

export default RatingSlider;
