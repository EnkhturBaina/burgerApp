import { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import css from "./style.module.css";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      salad: 1,
      meat: 2,
      cheese: 1,
    },
    data: 2,
  };

  ortsNemeh = (e) => {
    const obj = { ...this.state.ingredients };
    obj[e]++;

    this.setState({ ingredients: obj });
    console.log("ingredients", this.state.ingredients);
  };
  ortsHasah = (e) => {
    const obj = { ...this.state.ingredients };

    if (obj[e] >= 1) {
      obj[e]--;

      this.setState({ ingredients: obj });
    }
    console.log("ingredients", this.state.ingredients);
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
