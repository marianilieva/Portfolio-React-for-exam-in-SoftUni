import { Link } from "react-router-dom";
import styles from './Menu.module.css';

export default function Menu () {
    return(
        <div className={styles['menu']}>
            <Link to="/">Home</Link>
            <Link to="/physical">Physical</Link>
            <Link to="/mind">Mind</Link>
            <Link to="/geographical">Geographical</Link>
            <Link to="/social">Social</Link>
            <Link to="/interests">Interests</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}