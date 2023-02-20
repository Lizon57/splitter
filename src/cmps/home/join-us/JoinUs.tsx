import styles from "./JoinUs.module.scss"
import mobilePrimary from "../../../assets/images/layout/join-us-mobile-primary.png"
import mobileSecondary from "../../../assets/images/layout/join-us-mobile-secondary.png"

import { Button } from "../../common/button/Button"


export const JoinUs = () => {
    return (
        <section className={styles.joinUsContainer}>
            <div className={styles.callToAction}>
                <p>
                    The royalties exchange will be easy to use, with a user-friendly interface that makes it simple for creators to upload and manage their.
                </p>

                <Button text="Main Button" />
            </div>

            <div className={styles.imagesContainer}>
                <img src={mobilePrimary} alt="mobile primary" className={styles.primary} />
                <img src={mobileSecondary} alt="mobile secondary" className={styles.secondary} />
            </div>
        </section>
    )
}