import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="rotas/">Home</Link>
        <Link to="rotas/about">contnet</Link>
      </nav>
    </div>
  );
}

export default Navbar;
