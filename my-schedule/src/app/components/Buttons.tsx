"use Client";

import  { useRouter } from "next/navigation";

interface ButtonProps{
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}

export function Button({ text, onClick, href, className = "btn" }: ButtonProps){
    const router = useRouter();

    // href가 있으면 버튼 클릭 시 페이지 이동
    const handleCLick = () => {
        if(onClick) onClick();
        if(href) router.push(href);
    };

    return(
        <button
            type="button"
            onClick={handleCLick}
            className={className}
        >
            {text}
        </button>
    )
}