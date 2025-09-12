import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import { posts } from "@/data";
import ClientComments from "./ClientComments";

interface PostPageProps {
    params: {
        id: string;
    }
}

export async function generateStaticParams(){
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default function PostPage({ params }: PostPageProps){
    const postId = Number(params.id);
    const post = posts.find(p => p.id === postId);

    if(!post){
        notFound(); // 404
    }

    // ***************페이지
    return(
        <>
            <article className={styles.article}>
                <h1>제목: {post.title}</h1>
                <ul>
                    <li>작성자: {post.username}</li>
                    <li>작성일: {post.date}</li>
                </ul>
                <div className={styles.content}>
                    <p className={styles.img_box}><img src={post.imgUrl} alt={`${post.title} 이미지`} /></p>
                    <p className={styles.txt_box}>{post.content}</p>
                </div>
            </article>

            <ClientComments styles={styles}/>
        </>
    )
}