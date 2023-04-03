import { Link } from "react-router-dom";
import styles from './Menu.module.css';

export default function Menu () {
    return(
        <div className={styles['menu']}>
            <Link to="/">Home</Link>
        </div>
    );
}