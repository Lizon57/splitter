import styles from "./ContactUs.module.scss"
import arrow from "../../../assets/images/layout/contact-us-arrow.svg"
import { CircleText } from "../../common/circle-text/CircleText"
import { Button } from "../../common/button/Button"


export const ContactUs = () => {
    return (
        <section className={styles.contactUsContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.circleTextContainer}>
                    <CircleText
                        text="inventempower creators to sell the rights to their ideas"
                        className={styles.circleText}
                        centerSvg={arrow}
                        squareSize={216}
                    />
                </div>

                <div className={styles.contactForm}>
                    <h2>Keep in touch ;)</h2>

                    <form>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className={styles.formRow}>
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" />
                        </div>

                        <div className={styles.sendContainer}>
                            <Button text="Send" className={styles.send} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}