"use client";

import { useEffect, useRef } from "react";
import { Button } from "./Buttons";

interface ButtonProps{
    text: string;
    className?: string;
    onClick?: () => void;
}

interface DefaultPopupProps{
    text: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    buttons?: ButtonProps[];
}

const DefaultPopup = ({
    text,
    isOpen,
    setIsOpen,
    buttons
}: DefaultPopupProps) => {

    const outsideRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // 외부 클릭시
        const handleClickOutside = (e: MouseEvent) => {
            if(outsideRef.current && !outsideRef.current.contains(e.target as Node)){
                setIsOpen(false);
            }
        }

        // esc 눌렀을 시
        const handleEsc = (e: KeyboardEvent) => {
            console.log(e.key);
            console.log(e.code);
            if(e.key === "Escape"){
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);
        return() => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        }
    }, [setIsOpen]);

    return (
        <div className="btn_pop_wrap">
            <Button
                text={text}
                onClick={() => setIsOpen(true)}
            />
            {isOpen && (
                <div className="pop_wrap" ref={outsideRef}>
                    <div className="pop_header">
                        <Button
                            text="X"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                    <div className="pop_content">
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                        팝업 내용 <br />
                    </div>
                    {buttons && buttons.length > 0 && (
                        <div className="pop_footer">
                            {buttons.map((v, index) => (
                                <Button
                                    key={index}
                                    className={v.className}
                                    text={v.text}
                                    onClick={() => v.onClick}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export { DefaultPopup };