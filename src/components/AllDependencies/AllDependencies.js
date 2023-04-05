import { Link } from 'react-router-dom';

import styles from './AllDependencies.module.css';

export default function AllDependencies ()  {
    return (
        <div className={styles['allDependencies']}>
            <Link to="/physical" className={styles['physical']}>
                <div>
                    <h2>Health</h2>
                    <p>
                        Body is created of complicated communication between souls,
                        energy and building blocks of substances.
                    </p>
                    <p>Read more</p>
                </div>
            </Link>
            <Link to="/mind" className={styles['mind']}>
                <div>
                    <h2>Mind</h2>
                    <p>
                        Everybody has his own place in this world, his oppinion, his purpose 
                        in life, his qualities and weeknesses.
                    </p>
                    <p>Read more</p>
                </div>
            </Link>
            <Link to="/geographical" className={styles['geographical']}>
                <div>
                    <h2>Climate and Nature</h2>
                    <p>
                        Sun gives serotonin, light, warmness, vitamine D. It protects
                        us from melancholy, cold, viruses, rachitis, alergies.
                    </p>
                    <p>Read more</p>
                </div>
            </Link>
            <Link to="/social" className={styles['social']}>
                <div>
                    <h2>Social Environment</h2>
                    <p>
                        Everybody has the right to choose whether to live alone in 
                        the forest or to share civilisation with others.
                    </p>
                    <p>Read more</p>
                </div>
            </Link>
            <Link to="/interests" className={styles['interests']}>
                <div>
                    <h2>What Do You Do?</h2>
                    <p>
                        Things that we do, things that we like - this is 
                        what we are.
                    </p>
                    <p>Read more</p>
                </div>
            </Link>
        </div>
    )
}