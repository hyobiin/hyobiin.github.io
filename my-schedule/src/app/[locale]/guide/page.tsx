import styles from "./page.module.css";
import Link from "next/link";

export default function Guide(){

    return (
        <>
            <h2 className={styles.title}>가이드</h2>
            <ul className={styles.guide_wrap}>
                <li><Link href={`guide/button`}>버튼</Link></li>
                <li><Link href={`guide/popup`}>팝업</Link></li>
                <li><Link href={`guide/form`}>폼</Link></li>
            </ul>
        </>
    )
}