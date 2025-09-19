'use client';

import { useState } from "react";
import { DefaultPopup } from "../../components/Popup";

export default function GuidePopup(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="guide_wrap">
            {/* 팝업 */}
            <DefaultPopup
                text="기본 팝업"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                buttons={[
                    {
                        text: '취소',
                        className:'red',
                        onClick:() => setIsOpen(false)
                    },
                    {
                        text: '확인',
                        className:'green',
                        onClick:() => setIsOpen(false)
                    }
                ]}
            />
        </div>
    )
}