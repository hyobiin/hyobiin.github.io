"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { Button } from "./Buttons";

export enum PopupPosition { // 2번 방법 enum으로 만들어서 관리
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
    Center = 'center'
}

interface ButtonProps{
    text: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface DefaultPopupProps{
    text: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    content: ReactNode;
    buttons?: ButtonProps[];
    // position?: 'top' | 'right' | 'bottom' | 'left' | 'center'; // 1번 방법: pos 유니온 값 주기
    position?: PopupPosition; // 2번 방법 enum으로 만들어서 관리
}

const DefaultPopup = ({
    text,
    isOpen,
    setIsOpen,
    title,
    content,
    buttons,
    // position = 'center' // 1번 방법
    position = PopupPosition.Center, // 2번 방법 enum으로 만들어서 관리
}: DefaultPopupProps) => {

    const outsideRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // 외부 클릭시
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if(target.closest(".btn_pop")) return; // 특정 버튼 제외
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
        <div className={`
            btn_pop_wrap
            ${position ? position.toLowerCase() : ''}
        `}>
            <Button
                text={text}
                onClick={() => {
                    setIsOpen(prev => !prev)
                }}
                className="btn_pop"
            />
            {isOpen && (
                <div className="pop_wrap" ref={outsideRef}>
                    {title && (
                        <div className="pop_header">
                            <h2>{title}</h2>
                            <Button
                                text="X"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    )}
                    <div className="pop_content">
                        {content}
                    </div>
                    {buttons && buttons.length > 0 && (
                        <div className="pop_footer">
                            {buttons.map((v, index) => (
                                <Button
                                    key={index}
                                    className={v.className}
                                    text={v.text}
                                    onClick={v.onClick}
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