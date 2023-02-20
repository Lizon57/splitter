import { Advantage } from "../../../models/advantage"
import { AdvantagePreview } from "./AdvantagePreview"


export const AdvantagesList = ({ advantages }: Props) => {
    return (
        <>
            {advantages.map(advantage => <AdvantagePreview advantage={advantage} />)}
        </>
    )
}


type Props = {
    advantages: Advantage[]
}