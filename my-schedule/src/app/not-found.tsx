'use client';

import Link from "next/link";

export default function NotFound(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', minHeight: '100vh' }}>
            <p>요청하신 페이지가 존재하지 않습니다.</p>
            <Link href="/">
                <button style={{ marginTop: '20px', padding: '8px', borderRadius: '8px', background: '#ddd', fontWeight:'bold', cursor: 'pointer' }}>홈으로 돌아가기</button>
            </Link>
        </div>
    )
}