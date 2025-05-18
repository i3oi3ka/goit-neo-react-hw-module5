import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import style from "./HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
