import { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import css from "./style.module.css";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      salad: 0,
      meat: 0,
      cheese: 0,
    },
  };

  ortsNemeh = (e) => {
    var obj = { ...this.state.ingredients };
    obj[e]++;
    this.setState({ ingredients: obj });
  };
  ortsHasah = (e) => {
    var obj = { ...this.state.ingredients };

    if (this.state.ingredients[e] > 0) {
      obj[e]--;

      this.setState({ ingredients: obj });
    }
  };

  render() {
    return (
      <div className={css.BurgerBuilder}>
        <Burger orts={this.state.ingredients} />
        <BuildControls orts={this.state.ingredients} ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}
export default BurgerBuilder;
