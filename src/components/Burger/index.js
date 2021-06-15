import css from "./style.module.css";
import BurgerIngredient from "../BurgerIngredient";

const Burger = (props) => {
  var items = Object.entries(props.orts);

  var content = [];

  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient key={`${el[0]}${i}`} type={el[0]} />);
    }
  });

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content.length === 0 ? <div className={css.EmptyContent}>Орцоо сонгоно уу</div> : content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
