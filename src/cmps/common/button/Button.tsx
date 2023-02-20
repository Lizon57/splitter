import styles from "./Button.module.scss"


export const Button = ({ text, style }: Props) => {
    return (
        <button className={styles.button} style={style}>{text}</button>
    )
}


type Props = {
    text: string
    style?: { [key: string]: string | number }
}