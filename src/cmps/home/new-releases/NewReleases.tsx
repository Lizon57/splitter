import styles from "./NewReleases.module.scss"
import { ReleasesList } from "./ReleasesList"


const releases = ['New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release', 'New Release']

export const NewReleases = () => {
    return (
        <section className={styles.newReleasesContainer}>
            <ReleasesList releases={releases} />
        </section>
    )
}