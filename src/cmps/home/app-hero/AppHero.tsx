import styles from "./AppHero.module.scss"
import pentagon from "../../../assets/images/layout/app-hero-pentagon.png"

export const AppHero = () => {
    return (
        <section className={styles.appHeroContainer}>
            <div className={styles.contentContainer}>
                <h1>Changing the game in the music industry.</h1>
                <p className={styles.mainDescription}>Splitter is a platform that allows you to get the best from your creation. We at Splitter are making the first DAO for rights.</p>
                <button>Main Button</button>
                <h2>empowering creators to sell the rights to their ideas, inventions, and creative works on a virtual market.</h2>
                <p className={styles.secondaryDescription}>The royalties exchange will be easy to use, with a user-friendly interface that makes it simple for creators to upload and manage their works.</p>

            </div>
        </section>
    )
}