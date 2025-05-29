'use client';
import styles from '../../styles/PostCard.module.css';
import Link from 'next/link';
import { Post } from '@/types';

type PostCardProps = {
    post: Post;
};

export default function PostCard({ post }: PostCardProps) {
    const { title, description, date, username } = post;

    return(
        <div className={styles.card}>
            <Link href={`/post/${post.id}`} className={styles.title}>
                {title}
            </Link>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <span className={styles.username}>{username}</span>
                <span className={styles.date}>{date}</span>
            </div>
        </div>
    )
}