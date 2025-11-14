"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = 'posts';

export default function WritePage(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [list, setList] = useState<{ title: string; content: string; }[]>([]);

    useEffect(() => {
        const savedPosts = localStorage.getItem(STORAGE_KEY);
        if(savedPosts){
            setList(JSON.parse(savedPosts));
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newPost = { title, content };
        const updatedList = [...list, newPost];

        // 상태 업데이트 + localStorage 저장
        setList(updatedList);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

        setTitle("");
        setContent("");
    }

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem" }}>
                <label>
                    제목:{" "}
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: "100%", padding: "0.5rem" }}
                    required
                    />
                </label>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                <label>
                    내용:{" "}
                    <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: "100%", height: "200px", padding: "0.5rem" }}
                    required
                    />
                </label>
                </div>
                <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                등록하기
                </button>
            </form>

            <h2>등록된 글 목록</h2>
            <ul>
                {list.map((post, idx) => (
                <li key={idx}>
                    <strong>{post.title}</strong>
                    <p>{post.content}</p>
                </li>
                ))}
            </ul>
        </div>
    );
}