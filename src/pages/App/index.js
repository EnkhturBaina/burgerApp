import css from "./style.module.css";
import BurgerBuilder from "../BurgerBuilder";
import Toolbar from "../../components/Toolbar";

function App() {
  return (
    <div className={css.AppHeader}>
      <Toolbar />
      <BurgerBuilder />
    </div>
  );
}

export default App;
