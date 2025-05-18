import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={style.navList}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : style.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : style.link
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
