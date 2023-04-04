import { Link } from 'react-router-dom';

import styles from './AllDependencies.module.css';

export default function AllDependencies ()  {
    return (
        <div className={styles['allDependencies']}>
            <Link to="/physical" className={styles['physical']}>
                <div>
                    <p>
                        Body is created of complicated communication between souls,
                        energy and building blocks of substances.
                    </p>
                    <p>Read more</p>
                </div>
            </Link>
        </div>
    )
}