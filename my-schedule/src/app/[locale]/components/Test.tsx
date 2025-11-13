"use client";

import { useEffect, useRef, useState } from "react";

interface User{
    id: number;
    name: string;
    birth: string;
}

export default function UserCrud(){
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "유저1", birth: '2025.02.10' },
        { id: 2, name: "유저2", birth: '1996.10.01' },
    ]);

    // 새 값 받기
    const [newName, setNewName] = useState<string>("");
    const [newBirth, setNewBirth] = useState<string>("");

    // 포커스 이동
    const nameRef = useRef<HTMLInputElement>(null); // HTMLInputElement는 타입때문에 기입
    const birthRef = useRef<HTMLInputElement>(null);

    const birthRegex = newBirth.replace(/\D/g, ""); // 숫자만 추출

    // creat 함수
    const addUser = () => {
        if(!newName.trim() || birthRegex.length !== 8){
            if(!newName.trim() && birthRegex.length !== 8){
                alert("이름을 입력해주세요.\n생일은 숫자 8자리로 입력해주세요. ex) 19880101");
            }else if(!newName.trim()){
                alert("이름을 입력해주세요");
            }else{
                alert("생일은 숫자 8자리로 입력해주세요. ex) 19880101");
            }

            // 포커스
            if(!newName.trim()) nameRef.current?.focus();
            else birthRef.current?.focus();

            return;
        }

        // 숫자 0000.00.00 형식으로 변환
        const formattedBirth = `${birthRegex.slice(0, 4)}.${birthRegex.slice(4, 6)}.${birthRegex.slice(6, 8)}`;

        const newUser: User = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: newName,
            birth: formattedBirth,
        };

        setUsers([...users, newUser]);
        setNewName(""); // 입력창 초기화
        setNewBirth("");
    }

    // update 함수
    const updateUser = (id: number) => {
        // 이름 수정
        const updatedName = prompt("수정할 이름 입력, 취소시 기존 값 유지");

        let formattedBirth: string | null = null;
        let birthOnlyDigits: string | null = null;

        // 생일 수정 및 검증
        while (true) {
            const updatedBirth = prompt("수정할 생일 입력 (숫자 8자리), 취소시 기존 값 유지");
            if (!updatedBirth) break; // 취소 누르면 종료

            // 숫자만 추출
            birthOnlyDigits = updatedBirth.replace(/\D/g, "");

            if (birthOnlyDigits.length === 8) {
                formattedBirth = `${birthOnlyDigits.slice(0, 4)}.${birthOnlyDigits.slice(4, 6)}.${birthOnlyDigits.slice(6, 8)}`;
                break; // 올바르면 변환하고 루프 종료
            } else {
                alert("생일은 숫자 8자리로 입력해주세요. ex) 19880101");
                // while 계속 → prompt 다시 뜸
            }
        }

        setUsers(prev =>
            prev.map(user => (user.id === id
                ? { ...user,
                    name: updatedName?.trim() || user.name, // 옵셔널이 없으면 빨간줄 나는 이유 => prompt가 string|null을 반환하기 때문에 null일 경우 타입이 안맞아서 빨간줄이 뜸
                    birth: formattedBirth?.trim() || user.birth
                }
                : user)
            )
        );
    };

    // delete 함수
    const deleteUser = (id: number) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    };

    useEffect(() => {
        console.log('===users 데이터 내용==================================');
        console.log(users);
    }, [users])

    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.id} - {user.name} - {user.birth}
                    </li>
                ))}
            </ul>

            <label htmlFor="inpName">이름</label>
            <input
                type="text"
                id="inpName"
                placeholder="이름을 입력하세요"
                ref={nameRef}
                value={newName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => {
                    if(e.key === "Enter") birthRef.current?.focus();
                }}
            />
            <br />
            <label htmlFor="inpBirth">생일</label>
            <input
                type="text"
                id="inpBirth"
                placeholder="ex) 2000.01.01"
                ref={birthRef}
                value={newBirth}
                onChange={e => setNewBirth(e.target.value)}
                onKeyDown={e => {
                    if(e.key === "Enter") addUser(); // 엔터시 추가 함수 호출
                }}
            />
            <button onClick={addUser}>추가</button>
            {users.map(user => (
                <li key={user.id}>
                    {user.id} = {user.name}
                    <button onClick={() => updateUser(user.id)}>수정</button>
                    <button onClick={() => deleteUser(user.id)}>삭제</button>
                </li>
            ))}
        </div>
    )
}