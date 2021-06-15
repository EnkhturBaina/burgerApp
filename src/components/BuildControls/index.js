import css from "./style.module.css";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <BuildControl type="Салад" ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} orts="salad" />
      <BuildControl type="Гахайн мах" ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} orts="bacon" />
      <BuildControl type="Үхрийн мах" ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} orts="meat" />
      <BuildControl type="Бяслаг" ortsNemeh={props.ortsNemeh} ortsHasah={props.ortsHasah} orts="cheese" />
    </div>
  );
};
export default BuildControls;
