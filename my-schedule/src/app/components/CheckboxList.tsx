"use client";

import { useEffect, useState } from "react";

interface Option{
    id: number;
    label: string;
}

interface CheckProps{
    options?: string[];
}

const CheckboxList = ({
    options = ['Option1', 'Option2', 'Option3'],
}: CheckProps) => {
    const optionList: Option[] = options.map((label, index) => ({
        id: index  + 1,
        label,
    }));

    const [checkedList, setCheckedList] = useState<number[]>([]);

    const toggleOption = (id:number) => {
        setCheckedList(prev =>
            prev.includes(id)
                ? prev.filter(v => v !== id)
                : [...prev, id]
        );
    };

    const allChecked = checkedList.length === optionList.length;

    useEffect(() => {
        console.log('consolelog==============================');
        console.log(checkedList);
    }, [checkedList]);

    // 1. 옵션 체크 값을 넣는 박스
    // 2. 그 박스에서 값을 비교 하여 전체선택, 전체해제
    // 3. 전체선택, 전체해제 텍스트 변경

    const toggleAll = () => {
        if(allChecked){
            setCheckedList([]); // 전체해제
        }else{
            setCheckedList(optionList.map((option) => option.id)); // 전체선택
        }
    }

    return(
        <div>
            {/* 전체체크 박스 */}
            <label>
                <input
                    type='checkbox'
                    checked={allChecked}
                    onChange={toggleAll}
                />
                전체체크
            </label>
            {/* 각 체크박스 */}
            {optionList.map(v => (
                <label key={v.id}>
                    <input
                        type='checkbox'
                        checked={checkedList.includes(v.id)} // 체크시 checked
                        onChange={() => toggleOption(v.id)}
                    />
                    {v.label}
                </label>
            ))}
        </div>
    )
}

export default CheckboxList;