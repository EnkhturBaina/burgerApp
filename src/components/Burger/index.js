import css from "./style.module.css";
import BurgerIngredient from "../BurgerIngredient";

const Burger = (props) => {
  var items = Object.entries(props.orts);

  let content = [];

  items.map((el) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient key={`${el[0]}${i}`} type={el[0]} />);
    }
  });

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
