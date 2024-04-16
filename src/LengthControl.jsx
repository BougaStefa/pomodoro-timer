import PropTypes from "prop-types";
import "./LengthControl.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const capitalizeFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const LengthControl = ({ duration, setDuration, label,onClickUp,onClickDown }) => {
  return (
    <div className="length-adjuster">
      <div id={label + "-label"}>{capitalizeFirstChar(label)} Length</div>
      <button id={label + "-decrement"} className='btn-change' onClick={onClickDown}>
        <FontAwesomeIcon icon={faArrowDown} size="xl"/>
      </button>
      <div id={label + "-length"} className='btn-change'>{duration}</div>
      <button id={label + "-increment"} className='btn-change' onClick={onClickUp}>
        <FontAwesomeIcon icon={faArrowUp} size="xl"/>
      </button>
    </div>
  );
};

LengthControl.propTypes = {
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onClickDown:PropTypes.func,
  onClickUp:PropTypes.func,
};
