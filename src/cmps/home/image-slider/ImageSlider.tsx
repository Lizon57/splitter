import styles from "./ImageSlider.module.scss"
import smile from "../../../assets/images/layout/image-slider-smile.png"
import dontJudgeMeAlbum from "../../../assets/images/home/image-slider/dont judge me.png"
import dontPickMeAlbum from "../../../assets/images/home/image-slider/dont pick me.png"
import dontLetMeAlbum from "../../../assets/images/home/image-slider/dont let me.png"
import { ImageSliderItem } from "../../../models/ImageSliderItem"
import { CircleText } from "../../common/circle-text/CircleText"


const images: ImageSliderItem[] = [
    {
        image: dontJudgeMeAlbum,
        title: 'Don\'t Judge Me',
        creator: 'Alex Cole',
        cost: 158
    },
    {
        image: dontPickMeAlbum,
        title: 'Don\'t Pick Me',
        creator: 'Alex Dai',
        cost: 200
    },
    {
        image: dontLetMeAlbum,
        title: 'Don\'t Let Me',
        creator: 'Alex Bye',
        cost: 50
    },
]


export const ImageSlider = () => {
    return (
        <section className={styles.ImageSliderContainer}>
            {images.map((image, idx) => <div
                className={styles.itemContainer}>
                <div className={styles.infoContainer}>
                    <span className={styles.cost}>{image.cost}$</span>
                    <span className={styles.title}>{image.title}</span>
                    <span className={styles.creator}>{image.creator}</span>
                </div>
            </div>)}

            <div className={styles.circleTextContainer}>
                <CircleText
                    text="inventempower creators to sell the rights to their ideas"
                    className={styles.smile}
                    centerSvg={smile}
                    squareSize={216} />
            </div>
        </section>
    )
}