import styles from './Error.module.css';

export default function Error () {
    return (
        <div className={styles['error']}>
            <h2>Error 404</h2>
            Wrong url address. Please, try again!
        </div>
    )
}