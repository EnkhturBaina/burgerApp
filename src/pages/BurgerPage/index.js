import { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import css from "./style.module.css";

const INGREDIENTS_PRICE = {
  bacon: 500,
  salad: 100,
  meat: 1000,
  cheese: 300,
};

class BurgerPage extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      meat: 0,
      cheese: 0,
    },
    price: 0,
  };

  ortsNemeh = (e) => {
    var obj = { ...this.state.ingredients };
    obj[e]++;
    this.setState({ ingredients: obj });

    this.setState({ price: this.state.price + INGREDIENTS_PRICE[e] });
  };

  ortsHasah = (e) => {
    var obj = { ...this.state.ingredients };

    if (this.state.ingredients[e] > 0) {
      obj[e]--;
      A;

      this.setState({ ingredients: obj });

      this.setState({ price: this.state.price - INGREDIENTS_PRICE[e] });
    }
  };

  render() {
    return (
      <div className={css.BurgerPage}>
        <Burger orts={this.state.ingredients} />
        <BuildControls orts={this.state.ingredients} ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} price={this.state.price} />
      </div>
    );
  }
}
export default BurgerPage;
