import css from "./style.module.css";
import HamburgerMenu from "../HamburgerMenu";
import Logo from "../Logo";
import Menu from "../Menu";

const Toolbar = () => {
  return (
    <header className={css.Toolbar}>
      <HamburgerMenu />
      <Logo />
      <Menu />
    </header>
  );
};
export default Toolbar;
