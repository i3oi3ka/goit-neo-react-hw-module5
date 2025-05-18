import { Link } from "react-router-dom";
import styles from "./GoBackBtn.module.css";
const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={styles.link}>
      Go back
    </Link>
  );
};

export default GoBackBtn;
