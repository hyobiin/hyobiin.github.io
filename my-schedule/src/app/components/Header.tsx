'use client';
import { useState } from "react";
import styles from "../../styles/Header.module.css";
import Link from 'next/link';
import { HeaderProps } from "@/types";

export default function Header({ onSearch }: HeaderProps) {
    const [input, setInput] = useState('');

    // 엔터 검색
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            onSearch(input.trim());
        }
    };

    // 바로 검색
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setInput(value);
    //     onSearch(value.trim());  // 입력이 바뀔 때마다 바로 검색어 전달
    // };

    return(
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <span>bnlog</span>
                </Link>
                <nav className={styles.nav}>
                    <input
                        type='text'
                        placeholder='검색어를 입력하세요'
                        className={styles.search}
                        value={input}
                        onChange={(e) => setInput(e.target.value)} // 엔터 검색
                        onKeyDown={handleKeyDown} // 엔터 검색
                        // onChange={handleChange} // 바로 검색
                    />
                    <button className={styles.loginBtn}>로그인</button>
                </nav>
            </div>
        </header>
    )
};