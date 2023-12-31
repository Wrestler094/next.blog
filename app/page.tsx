import PostCard from "@/components/PostCard/PostCard";
import {capitalizeFirstLetter} from "@/helpers/capitalizeFirstLetter";
import {getFakeCategory, getFakePublicationDate, getFakeReadEstimation} from "@/helpers/getFakeData";

import {Post} from "@/types/types";

import styles from './page.module.scss';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};

const NEWS_ON_PAGE = 9;

export default async function HomePage() {
    const posts = await getPosts() as Post[];

    return (
        <main className={styles.grid}>
            {posts
                .slice(0, NEWS_ON_PAGE)
                .map(post => (
                    <PostCard
                        key={post.id}
                        title={capitalizeFirstLetter(post.title)}
                        introText={capitalizeFirstLetter(post.body)}
                        category={getFakeCategory()}
                        publicationDate={getFakePublicationDate()}
                        readEstimation={getFakeReadEstimation()}
                    />
                ))
            }
        </main>
    );
}
