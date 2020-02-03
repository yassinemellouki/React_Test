import React from "react";
import StarIcon from "../../../img/icons/star.svg";
import SVG from "react-inlinesvg";

//RETURN A CLASSED SVG STAR ICON BASED ON THE ITEM LEVEL VALUE
export default function placingStars(item_level) {
  let n = 5;
  let is_float = false;
  let floated = false;
  return [...Array(n)].map((e, i) => {
    let level = parseInt(item_level);
    let floated_value = level % 1;
    if (!floated_value === 0) {
      is_float = true;
    } else {
      is_float = false;
    }
    if (level > i) {
      return (
        <span className={"star star-filled"} key={i}>
          <SVG src={StarIcon} />
        </span>
      );
    } else if (is_float && !floated) {
      if (!floated) {
        floated = true;
        return (
          <span className="star star-half" key={i}>
            <SVG src={StarIcon} />
          </span>
        );
      }
    } else {
      return (
        <span className="star star-not-filled" key={i}>
          <SVG src={StarIcon} />
        </span>
      );
    }
  });
}
