import styles from "./AppHeader.module.scss"

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <span className={styles.brand}>splitter</span>

            <div className={styles.navigationLinksContainer}>
                <span>Log In</span>
                <span>Sign Up</span>
            </div>
        </header>
    )
}