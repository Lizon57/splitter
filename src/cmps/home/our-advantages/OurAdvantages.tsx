import styles from "./OurAdvantage.module.scss"
import { Advantage } from "../../../models/advantage"
import { AdvantagesList } from "./AdvantagesList"

import simplicityIcon from "../../../assets/images/layout/our-advantages-simplicity.svg"
import efficiencyIcon from "../../../assets/images/layout/our-advantages-efficiency.svg"
import protectionIcon from "../../../assets/images/layout/our-advantages-protection.svg"


const advantages: Advantage[] = [
    {
        icon: simplicityIcon,
        title: 'Simplicity',
        description: 'The royalties exchange will be easy to use, with a user-friendly interface that makes it simple for creators to upload and manage their works.'
    },
    {
        icon: efficiencyIcon,
        title: 'Efficiency',
        description: 'The royalties exchange will be easy to use, with a user-friendly interface that makes it simple for creators to upload and manage their works.'
    },
    {
        icon: protectionIcon,
        title: 'Protection',
        description: 'The royalties exchange will be easy to use, with a user-friendly interface that makes it simple for creators to upload and manage their works.'
    },
]


export const OurAdvantages = () => {
    return (
        <section className={styles.ourAdvantageContainer}>
            <AdvantagesList advantages={advantages} />
        </section>
    )
}