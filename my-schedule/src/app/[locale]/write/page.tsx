"use client"

import { useState } from "react"
import { Post } from "@/types";
import { useParams, useRouter } from "next/navigation";

export default function WritePage(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();
    const params = useParams();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 기존 localStorage 게시물 불러오기
        const existing = JSON.parse(localStorage.getItem('posts') || '[]') as Post[];

        // 새 게시물 만들기
        const newPost: Post = {
            id: Date.now(),
            title,
            description: content.slice(0, 50),
            date: new Date().toISOString().split('T')[0], // 오늘 날짜
            username: '나',
            category: '최신',
            content,
        }

        // 저장
        localStorage.setItem('posts', JSON.stringify([...existing, newPost]))

        // 홈으로 이동
        router.push(`/${params.locale}`);

        console.log("제목: ", title);
        console.log("내용: ", content);

        //초기화
        // setTitle("");
        // setContent("");
    };

    return(
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
                <button type="submit" style={{ padding: "0.5rem 1rem", background: 'pink' }}>
                    등록하기
                </button>
            </form>
        </div>
    );
}