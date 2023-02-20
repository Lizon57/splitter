import styles from "./ReleasePreview.module.scss"

export const ReleasePreview = ({ release }: Props) => {
    return (
        <span className={styles.releasePreviewContainer}>{release}</span>
    )
}


type Props = {
    release: string
}