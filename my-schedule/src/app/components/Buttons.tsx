"use Client";

import  { useRouter } from "next/navigation";

interface ButtonProps{
    text: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
    className?: string;
}

export function Button({ text, onClick, href, className }: ButtonProps){
    const router = useRouter();

    // href가 있으면 버튼 클릭 시 페이지 이동
    const handleCLick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(onClick) onClick(e);
        if(href) router.push(href);
    };

    return(
        <button
            type="button"
            onClick={handleCLick}
            className={`btn ${className || ""}`}
        >
            {text}
        </button>
    )
}