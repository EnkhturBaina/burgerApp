import css from "./style.module.css";

const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <p className={css.Label}>{props.type}</p>
      <button onClick={() => props.ortsNemeh(props.orts)}>Нэмэх</button>
      <button onClick={() => props.ortsHasah(props.orts)}>Хасах</button>
    </div>
  );
};
export default BuildControl;
