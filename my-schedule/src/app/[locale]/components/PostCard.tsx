'use client';
import styles from '../../../styles/PostCard.module.css';
import Link from 'next/link';
import { Post } from '@/types';
import { useParams } from 'next/navigation';
import { Button } from './Buttons';

type PostCardProps = {
    post: Post;
    isSelected: boolean;
    onToggle: () => void;
    onDelete: () => void;
    isLocalPost: boolean; // 내가 쓴 글인지 아닌지 판별
};

export default function PostCard({ post, isSelected, onToggle, onDelete, isLocalPost }: PostCardProps) {
    const { title, description, date, username } = post;
    const params = useParams();

    return(
        <div className={styles.card}>
            <div className={styles.title}>
                <label>
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={onToggle}
                    />
                    <span>{title}</span>
                </label>
                {isLocalPost &&
                    <Button
                        text='삭제'
                        onClick={onDelete}
                    />
                }
            </div>
            <Link href={`/${params.locale}/post/${post.id}`}>
                <p className={styles.description}>{description}</p>
                <div className={styles.footer}>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.date}>{date}</span>
                </div>
            </Link>
        </div>
    )
}