import styles from './Header.module.css'

export default function Header ()    {
    return (
        <div className={styles['header']}>
            <h1 className={styles['title']}>
                Update Ourselves
            </h1>
            <p>
                Life changes everyday. People become smarter, opportunities
                grow. Everybody has his own place in this world, and he needs
                to accept it and also be happy with it. But for this purpose,
                people must understand the nature and her rules and her strength
                and purity. Because many people think that science is for the scientists
                and common life is for other living creatures. The thing is that you don't
                have to understand details on how world works and why it exists, if you
                don't want to. But whether you study it or not, it works the same way
                and helps those who help it. So, if you want to be happy, you have to
                be in harmony with the world around, be comfortable at the place it 
                gives you and help it making the Earth a better place.
            </p>
        </div>
    );
}