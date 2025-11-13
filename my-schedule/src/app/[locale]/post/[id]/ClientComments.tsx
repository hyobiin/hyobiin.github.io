"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ClientComments({ styles } : { styles: { [key: string]: string}}){
    const [comments, setComments] = useState<{ id: string; text: string }[]>([]);
    const [newComment, setNewComment] = useState("");


    // 댓글 등록
    const handleAddComment = () => {
        if(!newComment.trim()) return;
        setComments([...comments, { id: uuidv4(), text: newComment.trim() }]);
        setNewComment("");
    }

    // 댓글 삭제
    const handleDeleteComment = (id: string) => {
        setComments(comments.filter((c) => c.id !== id));
    };

    // 엔터키 등록
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleAddComment();
        }
    };

    return(
        <div className={styles.comment_box}>
            <h2>댓글</h2>
            <div className={styles.inp_box}>
                <input
                    type="text"
                    value={newComment}
                    placeholder="입력하세요"
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleAddComment}>등록하기</button>
            </div>

            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} id={comment.id}>
                        {comment.text}
                        <button onClick={() => handleDeleteComment(comment.id)}>삭제하기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}