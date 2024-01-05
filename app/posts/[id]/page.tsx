import {Metadata} from "next";
import LikeBlock from "@/components/LikeBlock/LikeBlock";
import {getPost, getPosts} from "@/api/jsonplaceholder";

import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";

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

export default async function PostsPage({params}: Params) {
    const post = await getPost(params.id);

    return (
        <main>
            <p>
                {JSON.stringify(post)}
            </p>
            <LikeBlock postId={post.id}/>
        </main>
    );
}
