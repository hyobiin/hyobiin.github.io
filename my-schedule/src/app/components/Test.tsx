"use client";

import { useEffect, useState } from "react";

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

    const [newName, setNewName] = useState<string>("");
    const [newBirth, setNewBirth] = useState<string>("");

    // creat 함수
    const addUser = () => {
        if( !newName.trim()) return; // 빈값이 들어오면 함수 종료, 방어 코드 // null, undefined, " " 걸러줌
        const newUser: User = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: newName,
            birth: newBirth
        };
        setUsers([...users, newUser]);
        setNewName(""); // 입력창 초기화
        setNewBirth("");
    }

    // update 함수
    const updateUser = (id: number) => {
        const updatedName = prompt("새 이름 입력: ");
        if(!updatedName) return;
        setUsers(prev =>
            prev.map(user => (user.id === id ? { ...user, name: updatedName } : user))
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

            <label htmlFor="">이름</label>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={newName}
                onChange={e => setNewName(e.target.value)}
            />
            <br />
            <label htmlFor="">생일</label>
            <input
                type="text"
                placeholder="ex) 2000.01.01"
                value={newBirth}
                onChange={e => setNewBirth(e.target.value)}
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