import styles from "./innercontainer.module.css"
export default function InnerConteiner({children}){
    return <div className={styles.innerContainer}>{children}</div>
}