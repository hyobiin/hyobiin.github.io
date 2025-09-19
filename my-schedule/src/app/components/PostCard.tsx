'use client';
import styles from '../../styles/PostCard.module.css';
import Link from 'next/link';
import { Post } from '@/types';

type PostCardProps = {
    post: Post;
    isSelected: boolean;
    onToggle: () => void;
};

export default function PostCard({ post, isSelected, onToggle }: PostCardProps) {
    const { title, description, date, username } = post;

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
            </div>
            <Link href={`/post/${post.id}`}>
                <p className={styles.description}>{description}</p>
                <div className={styles.footer}>
                    <span className={styles.username}>{username}</span>
                    <span className={styles.date}>{date}</span>
                </div>
            </Link>
        </div>
    )
}