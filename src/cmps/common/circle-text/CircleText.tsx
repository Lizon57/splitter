import styles from "./CircleText.module.scss"


export const CircleText = ({ text, className, centerSvg, squareSize }: Props) => {
    return (
        <span className={styles.wrapper}>
            <svg viewBox={`0 0 ${squareSize} ${squareSize}`} width={squareSize} height={squareSize} className={className}>
                <defs><circle cx="50%" cy="50%" r="90" id="circle" /></defs>
                <text><textPath xlinkHref="#circle">{text}</textPath></text>
            </svg>

            <img src={centerSvg} alt="" />
        </span>
    )
}


type Props = {
    text: string
    className?: string
    centerSvg: string
    squareSize: number
}