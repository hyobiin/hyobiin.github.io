import Link from "next/link";

export default function Header(){
    return(
        <ul>
            <li><Link href="/detail">디테일</Link></li>
            <li><Link href="">서치 페이지</Link></li>
        </ul>
    )
}