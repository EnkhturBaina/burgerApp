import css from "./style.module.css";
import BurgerPage from "../BurgerPage";
import Toolbar from "../../components/Toolbar";

function App() {
  return (
    <div className={css.AppHeader}>
      <Toolbar />
      <BurgerPage />
    </div>
  );
}

export default App;
