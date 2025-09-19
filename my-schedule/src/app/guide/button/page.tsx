'use client';

import { Button } from "@/app/components/Buttons";
import { useState } from "react";

export default function GuideButton(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="guide_wrap">
            <h2 className="g_tit">버튼 가이드</h2>
            <Button
                text="기본 버튼"
            />
            <h3 className="g_subtit">class="버튼 이름"</h3>
            <Button
                text="blue"
                className="blue"
            />
            <Button
                text="red"
                className="red"
            />
            <Button
                text="green"
                className="green"
            />
        </div>
    )
}