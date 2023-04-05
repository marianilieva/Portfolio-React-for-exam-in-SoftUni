import styles from './Login.module.css';

export default function Login () {
    return (
        <div>
            <form className={styles['login']}>
                <label htmlFor='username'>Username</label>
                <input type='text' />
                <label htmlFor='password'>Password</label>
                <input type='password' />
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input type='password' />
                <input type='submit'  value={'Register'}/>
            </form>
        </div>
    );
}