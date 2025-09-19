'use client';

import { useState } from "react";
import { DefaultPopup, PopupPosition } from "../../components/Popup";

export default function GuidePopup(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <div className="guide_wrap">
            {/* 기본 팝업 */}
            <DefaultPopup
                text="중앙 배치"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                content='팝업내용입니다, 내용 길어질 시 스크롤 생깁니다.'
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

            <div className="g_list">
                {/* 버튼 하단 배치 */}
                <DefaultPopup
                    text="버튼 하단 배치"
                    isOpen={isOpen2}
                    setIsOpen={setIsOpen2}
                    content='내용입니다.'
                    buttons={[
                        {
                            text: '취소',
                            className:'red',
                            onClick:() => setIsOpen2(false)
                        },
                        {
                            text: '확인',
                            className:'green',
                            onClick:() => setIsOpen2(false)
                        }
                    ]}
                    position={PopupPosition.Bottom}
                />
            </div>
        </div>
    )
}