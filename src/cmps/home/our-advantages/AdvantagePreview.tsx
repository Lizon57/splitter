import styles from "./AdvantagePreview.module.scss"
import { Advantage } from "../../../models/Advantage"


export const AdvantagePreview = ({ advantage }: Props) => {
    return (
        <div className={styles.ourAdvantagePreviewContainer}>
            <img src={advantage.icon} alt={advantage.title} />
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
        </div>
    )
}


type Props = {
    advantage: Advantage
}