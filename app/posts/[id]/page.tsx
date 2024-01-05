import {Metadata} from "next";
import BlogPost from "@/app/posts/[id]/_components/BlogPost/BlogPost";
import Comments from "./_components/Comments/Comments";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";
import {getComments, getPost, getPosts} from "@/api/jsonplaceholder";

import styles from './page.module.scss';
import LikeBlock from "@/components/LikeBlock/LikeBlock";

type Params = {
    params: {
        id: string
    }
};

export async function generateMetadata({params}: Params): Promise<Metadata | undefined> {
    const post = await getPost(params.id);

    if (post && post.title) {
        return {
            title: capitalizeFirstLetter(post.title),
        };
    }
}

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.slice(0, 9).map(post => ({
        id: String(post.id)
    }));
}

export default async function PostPage({params}: Params) {
    const post = await getPost(params.id);
    const comments = await getComments(params.id);

    return (
        <main className={styles.wrapper}>
            <BlogPost
                title={post.title}
                content={post.body}
                className={styles['blog-post']}
            />

            <LikeBlock postId={post.id} className={styles['like-block']}/>

            {comments && comments.length && (
                <Comments comments={comments} className={styles.comments}/>
            )}

            <div>FORM WILL BE HERE</div>
        </main>
    );
}
