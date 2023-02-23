import styles from "./Button.module.scss"


export const Button = ({ text, className, style }: Props) => {
    return (
        <button className={styles.button + ' ' + className} style={style}>{text}</button>
    )
}


type Props = {
    text: string
    className?: string
    style?: { [key: string]: string | number }
}