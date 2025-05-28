'use client';
import styles from "../../styles/Header.module.css";
import Link from 'next/link';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <span>bnlog</span>
                </Link>
                <nav className={styles.nav}>
                    <input type='text' placeholder='검색어를 입력하세요' className={styles.search} />
                    <button className={styles.loginBtn}>로그인</button>
                </nav>
            </div>
        </header>
    )
};