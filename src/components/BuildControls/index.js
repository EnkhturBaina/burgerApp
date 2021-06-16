import css from "./style.module.css";
import BuildControl from "../BuildControl";

var controls = {
  bacon: "Гахайн мах",
  salad: "Салад",
  meat: "Үхрийн мах",
  cheese: "Бяслаг",
};

const BuildControls = (props) => {
  console.log("BuildControls props", props);
  return (
    <div className={css.BuildControls}>
      <p className={css.Price}>Үнэ: {props.price}</p>
      {Object.keys(controls).map((el) => (
        <BuildControl type={controls[el]} ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} orts={el} />
      ))}
    </div>
  );
};
export default BuildControls;
