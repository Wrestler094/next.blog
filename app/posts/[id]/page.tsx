import Image from 'next/image';
import {Metadata} from "next";
import LikeBlock from "@/components/LikeBlock/LikeBlock";
import Tag from "@/components/Tag/Tag";
import Like from "@/components/Like/Like";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";
import {getRandomNumber} from "@/helpers/getRandomNumber";
import {getFakeCategory, getFakePublicationDate, getFakeReadEstimation} from "@/helpers/getFakeData";
import {getPost, getPosts} from "@/api/jsonplaceholder";

import postCard from '../../../public/images/post-image.png';

import styles from './page.module.scss';

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

    return (
        <main className={styles.wrapper}>
            <h2 className={styles.title}>{capitalizeFirstLetter(post.title)}</h2>
            <div className={styles['post-info']}>
                <Tag>{getFakeCategory()}</Tag> · <Tag isLight={true}>{getFakePublicationDate()}</Tag> · <Tag
                isLight={true}>{getFakeReadEstimation()}</Tag> · <Like numberOfLikes={getRandomNumber(0, 8)}/>
            </div>
            <Image
                src={postCard}
                alt="Post image"
                className={styles.image}
                priority={false}
            />
            <p dangerouslySetInnerHTML={{__html: capitalizeFirstLetter(post.body)}}></p>
            <LikeBlock postId={post.id}/>
        </main>
    );
}
