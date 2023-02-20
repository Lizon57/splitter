import styles from "./AppFooter.module.scss"
import facebookIcn from "../../assets/images/layout/facebook-icon.svg"
import instagramIcn from "../../assets/images/layout/instagram-icon.svg"
import twitterIcn from "../../assets/images/layout/twitter-icon.svg"
import optionArrow from "../../assets/images/layout/footer-arrow-icon.svg"


export const AppFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftSide}>
                <span className={styles.brand}>splitter</span>

                <div className={styles.internalLinks}>
                    <a href="/">Lorem Ipsum</a>
                    <a href="/">Lorem Ipsum</a>
                    <a href="/">Lorem Ipsum Dolor</a>
                </div>
            </div>

            <div className={styles.rightSide}>
                <span className={styles.networksLinks}>
                    <a href="/"><img src={facebookIcn} alt="facebook" /></a>
                    <a href="/"><img src={instagramIcn} alt="instagram" /></a>
                    <a href="/"><img src={twitterIcn} alt="twitter" /></a>
                </span>

                <span className={styles.copyrights}>© 2023 Rafael, Inc. All rights reserved.</span>

                <span className={styles.option}><img src={optionArrow} /></span>
            </div>
        </footer>
    )
}