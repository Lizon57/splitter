import { ReleasePreview } from "./ReleasePreview"
import star from "../../../assets/images/layout/new-release-star.svg"


export const ReleasesList = ({ releases }: Props) => {
    return (
        <>
            {releases.map(release => <>
                <ReleasePreview release={release} />
                <img src={star} alt="" />
            </>)}
        </>
    )
}


type Props = {
    releases: string[]
}