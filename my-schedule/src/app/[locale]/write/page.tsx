"use client"

import { useState } from "react"

export default function WritePage(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("제목: ", title);
        console.log("내용: ", content);

        //초기화
        setTitle("");
        setContent("");
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
                <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                등록하기
                </button>
            </form>
        </div>
    );
}